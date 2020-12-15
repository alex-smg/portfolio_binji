import React from 'react';
import './inputTextarea.scss'

const InputTextarea = (props) => {
    return (
        <div className="input_textarea">
            <label className="semiBold_title" for={props.name}>{props.label}</label>
            <textarea name={props.name} placeholder={props.placeholder}></textarea>
        </div>
    )
}

export default InputTextarea;