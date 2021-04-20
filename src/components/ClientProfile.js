import React from "react";
import { useForm } from "react-hook-form";

import "../styles.css";

// Messages
const required = "This field is required";
const maxLength = "Your input exceed maximum length";

const errorMessage = error => {
    return <div className="invalid-feedback">{error}</div>;
};

export default function ClientProfile() {
    const { register, handleSubmit, getValues, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.warn("Form Value ", getValues());
    console.warn("Form Error ", errors);
    return (
        <div className="content-wrapper">
            <div className="col-sm-12">
                <h3>Client Profile</h3>
            </div>
            <div className="col-sm-12">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Username"

                            {...register('Username', { required: true, maxLength: 20 })}
                        />
                        {errors.Username &&
                            errors.Username.type === "required" &&
                            errorMessage(required)}
                        {errors.Username &&
                            errors.Username.type === "maxLength" &&
                            errorMessage(maxLength)}
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Name"

                            {...register('Name', { required: true, maxLength: 50 })}
                        />
                        {errors.Name &&
                            errors.Name.type === "required" &&
                            errorMessage(required)}
                        {errors.Name &&
                            errors.Name.type === "maxLength" &&
                            errorMessage(maxLength)}
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="tel"
                            placeholder="Mobile number"
                            {...register('MobileNumber', { required: true, maxLength: 12 })}
                        />
                        {errors.MobileNumber &&
                            errors.MobileNumber.type === "maxLength" &&
                            errorMessage(maxLength)}
                        {errors.MobileNumber &&
                            errors.MobileNumber.type === "required" &&
                            errorMessage(required)}
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="email"
                            placeholder="Email"
                            {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
                        />
                        {errors.Email &&
                            errors.Email.type === "required" &&
                            errorMessage(required)}
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="url"
                            placeholder="Website"
                            {...register('Website', { required: true })}
                        />
                        {errors.Website &&
                            errors.Website.type === "required" &&
                            errorMessage(required)}
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Password"
                            {...register('Password', { required: true })}
                        />
                        {errors.Password &&
                            errors.Password.type === "required" &&
                            errorMessage(required)}
                    </div>
                    <div className="form-group">
                        <label>Gender</label>
                        <br />
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                value="Male"
                                id="inlineRadio1"
                                {...register('genderOptions', { required: true })}
                            />
                            <label className="form-check-label" htmlFor="inlineRadio1">
                                Male
              </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                value="Female"
                                id="inlineRadio2"
                                {...register('genderOptions', { required: true })}
                            />
                            <label className="form-check-label" htmlFor="inlineRadio2">
                                Female
              </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                value=" Non-binary"
                                id="inlineRadio3"
                                {...register('genderOptions', { required: true })}
                            />
                            <label className="form-check-label" htmlFor="inlineRadio3">
                                Non-binary
                              </label>
                        </div>
                        {errors.genderOptions &&
                            errorMessage("Please select Gender")}
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="datetime"
                            placeholder="Date of Birth"
                            {...register('DateofBirth', {
                                required: true,
                                pattern: /(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d/i
                            })}
                        />
                        {errors.DateofBirth &&
                            errorMessage("Please use the following format MM/DD/YYYY")}
                    </div>
                    <div className="form-group">
                        <textarea className="form-control"   {...register('About', { required: true })} />
                    </div>
                    <div className="form-group">
                        <input
                            type="checkbox"
                            placeholder="Subscribe to Newsletter"
                            id="customCheck1"
                            {...register('tnc', { required: true })}
                        />

                        <label htmlFor="customCheck1"> Subscribe to Newsletter</label>
                        {errors.tnc &&
                            errorMessage("Please check the term and condition")}
                    </div>
                    <div className="form-group">
                        <input className="btn btn-primary" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
}

