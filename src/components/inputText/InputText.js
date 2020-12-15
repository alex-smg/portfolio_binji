import React from 'react';
import './InputText.scss'

const InputText = (props) => {
    return (
        <div className="input_text">
            <label className="semiBold_title" for={props.name}>{props.label}</label>
            <input type="text" name={props.name} />
        </div>
    )
}

export default InputText;