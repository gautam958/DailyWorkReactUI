import React, { Fragment } from 'react'

export default function CustomInput(props) {
    return (
        <Fragment>
            <input type={props.type} name={props.name} onChange={props.onChange} value={props.value} required={props.required}
                className={props.className} placeholder={props.placeholder} autoFocus={props.autoFocus}
                ref={props.InputRef}
            />
        </Fragment>
    )
}

//className={props.ErrorText === "" ? props.className : "form-control is-invalid"}