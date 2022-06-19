import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import '../Styles/Selector.css'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



export default function CustomSelector(props) {
  const { title, array, callback } = props;

  const [value, setValue] = useState([]);

  const handleChange = (event) => {
    const { target: { value }, } = event;

    setValue(typeof value === 'string' ? value.split(',') : value,);

    if (callback) callback(value);
  };

  return (
    <div className='selectorContainer'>
      <h4 className='selectorTitle'>{title}</h4>

      <FormControl sx={{ m: 1, width: 300 }}>
        <Select
          value={value}
          onChange={handleChange}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
          autoWidth
          defaultValue={""}
        >
          {array.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={value.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}


