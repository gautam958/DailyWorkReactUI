import React, { useState, useEffect, useRef } from 'react';
import UserService from '../services/UserService';
import MySwal from './common/Sweetalert/SweetAlert';
import UsersValidation from './UsersValidation';
import CustomInput from './common/CustomInput';

export default function Users() {

    const intiState = {
        Userid: '',
        Password: '',
        ConfirmPassword: '',
        FullName: '',
        Email: '',
        ContactNo: '',
        Country: ''
    };
    const txtUserid = React.createRef({});
    const txtPassword = React.createRef({});
    const txtConfirmPassword = React.createRef({});
    const txtFullName = React.createRef({});
    const txtEmail = React.createRef({});
    const txtContactNo = React.createRef({});
    const txtCountry = React.createRef({});

    const [UserData, SetUserData] = useState({
        intiState
    });

    const [errors, Seterrors] = useState({});

    const handleChange = (event) => {
        SetUserData({ ...UserData, [event.target.name]: event.target.value });
        Seterrors(UsersValidation(UserData));
        InputErrorSync('txt' + event.target.name);
    };

    const InputErrorSync = (name) => {
        console.log(name);
        txtUserid.current.classList.add("form-control");
    }

    const ResetForm = (e) => {

        ClearForm();

    }

    const ClearForm = () => {
        Seterrors({});
        SetUserData({
            intiState
        });
        console.log(txtUserid);
        txtUserid.current.focus();
    }

    // const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    // delay(3000);
    const SaveUser = async (e) => {
        e.preventDefault();
        if (Seterrors(UsersValidation(UserData))) {
            const result = await UserService.UserSave().Save(UserData);
            if (result.status === 200) {
                ClearForm();
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
                txtUserid.current.focus();
            }
        }
        else {
            MySwal.fire(
                'Error Occured!',
                UserData.Error,
                'error'
            )
            txtUserid.current.focus();
        }
    };

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
                                                <CustomInput type="text" name="Userid" onChange={handleChange} value={UserData.Userid} required={true}
                                                    className={errors.Userid === "" ? "form-control" : "form-control is-invalid"} placeholder="Enter User Name" autoFocus="true" InputRef={txtUserid}
                                                    ErrorText={errors.Userid} />
                                                {errors.Userid && <p className=" form-control is-invalid"  >{errors.Userid}</p>}
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label for="Password">Password</label>
                                                        <CustomInput type="text" name="Password" onChange={handleChange} value={UserData.Password} required={true}
                                                            className="form-control" placeholder="Enter Password" InputRef={txtPassword} />
                                                        {errors.Password && <p style={{ colo: 'red' }}>{errors.Password}</p>}
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="FullName">Full Name</label>

                                                        <CustomInput type="text" name="FullName" onChange={handleChange} value={UserData.FullName} required={true}
                                                            className="form-control" placeholder="Enter FullName" InputRef={txtFullName} />
                                                        {errors.FullName && <p style={{ colo: 'red' }}>{errors.FullName}</p>}
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="ContactNo">Contact Number</label>


                                                        <CustomInput type="tel" name="ContactNo" onChange={handleChange} value={UserData.ContactNo} required={true}
                                                            className="form-control" placeholder="Enter Contact Number" InputRef={txtContactNo} />

                                                        {errors.ContactNo && <p style={{ colo: 'red' }}>{errors.ContactNo}</p>}
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label for="ConfirmPassword">
                                                            Confirm Password
                                                    </label>

                                                        <CustomInput type="password" name="ConfirmPassword" onChange={handleChange} value={UserData.ConfirmPassword} required={true}
                                                            className="form-control" placeholder="Enter ConfirmPassword" InputRef={txtConfirmPassword} />

                                                        {errors.ConfirmPassword && <p style={{ colo: 'red' }}>{errors.ConfirmPassword}</p>}
                                                    </div>

                                                    <div className="form-group">
                                                        <label for="Email">Email</label>

                                                        <CustomInput type="email" name="Email" onChange={handleChange} value={UserData.Email} required={true}
                                                            className="form-control" placeholder="Enter Email" InputRef={txtEmail} />

                                                        {errors.Email && <p style={{ colo: 'red' }}>{errors.Email}</p>}
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="txtCountry">Country</label>

                                                        <CustomInput type="text" name="Country" onChange={handleChange} value={UserData.Country} required={true}
                                                            className="form-control" placeholder="Enter Country" InputRef={txtCountry} />

                                                        {errors.Country && <p style={{ colo: 'red' }}>{errors.Country}</p>}
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="card-footer">
                                        <button type="reset" onClick={ResetForm} className="btn btn-info float-right  ml-2  ">  <i class="fas fa-retweet"></i> Cancel</button>
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

