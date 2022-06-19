import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

export default function CustomCheckBox(props) {
    const { label, callback, checked } = props

    const onPress = (value) => {
        if (callback) {
            callback(value)
            console.log(value)
        } else { console.log("no callback defined") }
    }

    return (
        <div className='CheckBoxContainer'>
            <Checkbox color='success' onChange={(temp) => { onPress(temp) }} checked={checked ?? false} />
            <p className='checkBoxTitle'>{label}</p>
        </div>
    );
}