
const UsersValidation = (values) => {

    let errors = {};

    if (!values.Userid) {
        errors.Userid = "Userid is required";
    }
    if (!values.Password) {
        errors.Password = "Password is required";
    }
    if (!values.ConfirmPassword) {
        errors.ConfirmPassword = "ConfirmPassword is required";
    }
    else if (values.ConfirmPassword !== values.Password) {
        errors.ConfirmPassword = "Password and ConfirmPassword is must be matched";
    }
    if (!values.FullName) {
        errors.FullName = "FullName is required";
    }
    if (!values.Email) {
        errors.Email = "Email is required";
    }
    if (!values.ContactNo) {
        errors.ContactNo = "ContactNo is required";
    }
    if (!values.Country) {
        errors.Country = "Country is required";
    }
    return errors;
}

export default UsersValidation
