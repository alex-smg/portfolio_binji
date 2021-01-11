import React from 'react';
import './inputTextarea.scss'

const InputTextarea = (props) => {
    return (
        <div className="input_textarea">
            <label className="semiBold_title" for={props.name}>{props.label}</label>
            <textarea name={props.name} onChange={(e) => props.changeValue(props.name, e.target.value)} placeholder={props.placeholder}></textarea>
            <span className="error">{props.error}</span>
        </div>
    )
}

export default InputTextarea;