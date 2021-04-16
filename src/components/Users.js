import userEvent from '@testing-library/user-event';
import React, { useState, useEffect } from 'react';
import UserService from '../services/UserService';
import MySwal from './common/Sweetalert/SweetAlert';

export default function Users() {

    const [UserData, SetUserData] = useState({
        Userid: '',
        Password: '',
        ConfirmPassword: '',
        FullName: '',
        Email: '',
        ContactNo: '',
        Country: '',
        EError: [{
            Aserid: '',
            APassword: '',
            AConfirmPassword: '',
            AFullName: '',
            AEmail: '',
            AContactNo: '',
            ACountry: '',
        }
        ]
    });

    const [UserError, SetUserError] = useState({
        EUserid: '',
        EPassword: '',
        EConfirmPassword: '',
        EFullName: '',
        EEmail: '',
        EContactNo: '',
        ECountry: '',
    });

    const handleChange = (event) => {

        SetUserData({ ...UserData, [event.target.name]: event.target.value });
    };
    const ResetForm = (e) => {
        console.log(e);
    };
    const SaveUser = async (e) => {
        e.preventDefault();
        ValidateUser(UserData);
        if (UserData.Error === '') {
            const result = await UserService.UserSave().Save(UserData);
            if (result.status === 200) {
                console.log("User Saved Successfully");
                MySwal.fire(
                    'User Saved!',
                    'User Saved Successfully!',
                    'success'
                )
            }
            else {
                MySwal.fire(
                    'Error Occured!',
                    result,
                    'error'
                )
            }
        }
        else {
            MySwal.fire(
                'Error Occured!',
                UserData.Error,
                'error'
            )
        }

    };

    const ValidateUser = (UserData) => {
        // SetUserError({ ...UserError, EUserid: "Gautam" });
        if (UserData.Userid === '') {
            SetUserData({ ...UserError, [UserError.EUserid.name]: 'Userid is cannot be left blank' });

        }
        if (UserData.Password === '') {
            SetUserData({ ...UserError, [UserError.EPassword]: 'Password is cannot be left blank' });

        }
        // if (UserData.ConfirmPassword === '') {
        //     SetUserData({ ...UserData, EError: { [UserData.UError.ConfirmPassword]: 'ConfirmPassword is cannot be left blank' } });

        // }
        // if (UserData.FullName === '') {
        //     SetUserData({ ...UserData, EError: { [UserData.UError.FullName]: 'FullName is cannot be left blank' } });

        // }
        // if (UserData.Email === '') {
        //     SetUserData({ ...UserData, EError: { [UserData.UError.Email]: 'Email is cannot be left blank' } });

        // }
        // if (UserData.ContactNo === '') {
        //     SetUserData({ ...UserData, EError: { [UserData.UError.ContactNo]: 'ContactNo is cannot be left blank' } });

        // }
        // if (UserData.Country === '') {
        //     SetUserData({ ...UserData, EError: { [UserData.UError.Country]: 'Country is cannot be left blank' } });

        // }
        console.log(UserError);
        console.log(UserData);
        return UserData.EError;
    }

    return (
        <div>
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Users</h1>
                            </div>
                            {/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <a href="#">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">Users</li>
                                </ol>
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container-fluid */}
                </div>
                {/* /.content-header */}
                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        <div className="col-md-12">
                            <div className="card card-info">

                                <div className="card-header">
                                    <div className="card-title">User Form</div>
                                </div>
                                <form>
                                    <div className="row">

                                        <div className="card-body">

                                            <div className="form-group">
                                                <label for="Userid">User Name</label>
                                                <input type="text"
                                                    className="form-control"
                                                    name="Userid"
                                                    value={UserData.Userid}
                                                    placeholder="Enter User Name"
                                                    autoFocus="true"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label for="Password">Password</label>
                                                        <input
                                                            type="Password"
                                                            className="form-control"
                                                            name="Password"
                                                            value={UserData.Password}
                                                            placeholder="Enter Password"
                                                            onChange={handleChange}
                                                        ></input>
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="FullName">Full Name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="FullName"
                                                            value={UserData.FullName}
                                                            placeholder="Enter Full Name"
                                                            onChange={handleChange}
                                                        ></input>
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="ContactNo">Contact Number</label>
                                                        <input
                                                            type="tel"
                                                            className="form-control"
                                                            name="ContactNo"
                                                            value={UserData.ContactNo}
                                                            placeholder="Enter Contact Number"
                                                            onChange={handleChange}
                                                        ></input>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label for="ConfirmPassword">
                                                            Confirm Password
                                                    </label>
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            name="ConfirmPassword"
                                                            value={UserData.ConfirmPassword}
                                                            placeholder="Enter Confirm Password"
                                                            onChange={handleChange}
                                                        ></input>
                                                    </div>

                                                    <div className="form-group">
                                                        <label for="Email">Email</label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            name="Email"
                                                            value={UserData.Email}
                                                            placeholder="Enter Email"
                                                            onChange={handleChange}
                                                        ></input>
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="txtCountry">Country</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="Country"
                                                            value={UserData.Country}
                                                            placeholder="Enter Country"
                                                            onChange={handleChange}
                                                        ></input>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="card-footer">
                                        <button type="button" onClick={ResetForm} className="btn btn-info float-right  ml-2  ">  <i class="fas fa-retweet"></i> Cancel</button>
                                        <button type="button" onClick={SaveUser} className="btn btn-info float-right "> <i class="far fa-save"></i> Save</button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* /.container-fluid */}
                </section>
                {/* /.content */}
            </div>
        </div>
    );
}

