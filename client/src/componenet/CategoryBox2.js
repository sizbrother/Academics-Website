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
    <Box sx={{ minWidth: 60 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Geographic Focus</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Geographic Focus"
          onChange={handleChange}
        >
          <MenuItem value={'Africa'}>Africa</MenuItem>
          <MenuItem value={'Asia'}>Asia</MenuItem>
          <MenuItem value={'Australia and/or New Zealand'}>Australia and/or New Zealand</MenuItem>
          <MenuItem value={'Pacific Islands'}>Pacific Islands</MenuItem>
          <MenuItem value={'Europe'}>Europe</MenuItem>
          <MenuItem value={'United States and/or Canada'}>United States and/or Canada</MenuItem>
          <MenuItem value={'Latin America and/or Caribbean'}>Latin America and/or Caribbean</MenuItem>
          <MenuItem value={'Middle East'}>Middle East</MenuItem>
          <MenuItem value={'N/A'}>N/A</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
  };
