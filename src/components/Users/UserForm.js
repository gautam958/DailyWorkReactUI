import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import MySwal from '../common/Sweetalert/SweetAlert';
import UserService from '../../services/UserService';
import "../../styles.css";

// Messages
const required = "This field is required";
const maxLength = "Your input exceed maximum length";
const minLength = "Your input must be minimum length";

const errorMessage = (error) => {
    return <div className="invalid-feedback">{error}</div>;
};

export default function UserForm() {

    const { register, handleSubmit, reset, watch, setFocus, getValues, formState: { errors, isValid, isDirty } } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        const result = await UserService.UserSave().Save(data);
        if (result.status === 200) {
            ResetForm();
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
            setFocus("Userid");
        }
    }

    const Passwordref = useRef({});
    Passwordref.current = watch("Password", "");

    useEffect(() => {
        setFocus("Userid");
    }, [setFocus])


    const ResetForm = () => {
        setFocus("Userid");
        reset();
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
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">

                                        <div className="card-body">

                                            <div className="form-group">
                                                <label for="Userid">User Name</label>
                                                <input type="text" className="form-control" placeholder="Enter Userid"
                                                    {...register('Userid', { required: true, maxLength: 20 })} />
                                                {errors.Userid &&
                                                    errors.Userid.type === "required" &&
                                                    errorMessage(required)}
                                                {errors.Userid &&
                                                    errors.Userid.type === "maxLength" &&
                                                    errorMessage(maxLength)}
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label for="Password">Password</label>
                                                        <input type="password" className="form-control" placeholder="Enter Password"
                                                            {...register('Password', { required: true, minLength: 4, maxLength: 12 })} />
                                                        {errors.Password &&
                                                            errors.Password.type === "required" &&
                                                            errorMessage(required)}
                                                        {errors.Password &&
                                                            errors.Password.type === "minLength" &&
                                                            errorMessage(minLength)}
                                                        {errors.Password &&
                                                            errors.Password.type === "maxLength" &&
                                                            errorMessage(maxLength)}
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="FullName">Full Name</label>

                                                        <input type="text" className="form-control" placeholder="Enter FullName"
                                                            {...register('FullName', { required: true })} />
                                                        {errors.FullName &&
                                                            errors.FullName.type === "required" &&
                                                            errorMessage(required)}
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="ContactNo">Contact Number</label>

                                                        <input type="tel" className="form-control" placeholder="Enter Contact Number"
                                                            {...register('ContactNo', { required: true })} />

                                                        {errors.ContactNo &&
                                                            errors.ContactNo.type === "required" &&
                                                            errorMessage(required)}
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label for="ConfirmPassword">
                                                            Confirm Password
                                                </label>

                                                        <input type="password" className="form-control" placeholder="Enter ConfirmPassword"
                                                            {...register('ConfirmPassword', {
                                                                required: true,
                                                                validate: value => value === Passwordref.current || "The passwords do not match"
                                                            })} skip />

                                                        {errors.ConfirmPassword &&
                                                            errors.ConfirmPassword.type === "required" &&
                                                            errorMessage(required)}
                                                        {errors.ConfirmPassword && errorMessage(errors.ConfirmPassword.message)}
                                                    </div>

                                                    <div className="form-group">
                                                        <label for="Email">Email</label>

                                                        <input type="email" className="form-control" placeholder="Enter Email"
                                                            {...register('Email', { required: true })} />

                                                        {errors.Email &&
                                                            errors.Email.type === "required" &&
                                                            errorMessage(required)}
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="txtCountry">Country</label>

                                                        <input type="text" className="form-control" placeholder="Enter Country"
                                                            {...register('Country', { required: true })} />

                                                        {errors.Country &&
                                                            errors.Country.type === "required" &&
                                                            errorMessage(required)}
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="card-footer">
                                        <button type="reset" onClick={ResetForm} className="btn btn-info float-right  ml-2  ">  <i class="fas fa-retweet"></i> Cancel</button>
                                        <button type="submit" className="btn btn-info float-right "> <i class="far fa-save"></i> Save</button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* /.container-fluid */}
                </section>
                {/* /.content */}
            </div>
        </div >
    );
}

