import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      
      width: 300,
    },
  },
};

function getStyles(method, approach, theme) {
  return {
    fontWeight:
      approach.indexOf(method) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function CatagoryBox2() {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
    setAge(event.target.value);
    }


  return (
    <Box sx={{ maxWidth: 200, margin: 2}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Time Period</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Time Period"
          onChange={handleChange}
        >
          <MenuItem value={'19th Century'}>19th Century</MenuItem>
          <MenuItem value={'20th Century'}>20th Century</MenuItem>
          <MenuItem value={'21st Century'}>21st Century</MenuItem>
          <MenuItem value={'N/A'}>N/A</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
  };


  
