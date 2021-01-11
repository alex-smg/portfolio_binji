import React from 'react';
import './InputText.scss'

const InputText = (props) => {
    return (
        <div className="input_text">
            <label className="semiBold_title" for={props.name}>{props.label}</label>
            <input type={props.type} onChange={(e) => props.changeValue(props.name, e.target.value)} name={props.name} />
            <span className="error">{props.error}</span>
        </div>
    )
}

export default InputText;