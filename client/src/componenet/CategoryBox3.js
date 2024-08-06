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

export default function CatagoryBox() {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
    setAge(event.target.value);
    }


  return (
    <Box sx={{ minWidth: 60 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Method/Approach</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Method/Approach"
          onChange={handleChange}
        >
          <MenuItem value={'Anthropology'}>Anthropology</MenuItem>
          <MenuItem value={'Area Studies'}>Area Studies</MenuItem>
          <MenuItem value={'Art History'}>Art History</MenuItem>
          <MenuItem value={'Creative Writing'}>Creative Writing</MenuItem>
          <MenuItem value={'Disability Studies'}>Disability Studies</MenuItem>
          <MenuItem value={'Economics'}>Economics</MenuItem>
          <MenuItem value={'Ethnography'}>Ethnography</MenuItem>
          <MenuItem value={'Ethnohistory'}>Ethnohistory</MenuItem>
          <MenuItem value={'Gender Studies'}>Gender Studies</MenuItem>
          <MenuItem value={'Genealogy'}>Genealogy</MenuItem>
          <MenuItem value={'Geography'}>Geography</MenuItem>
          <MenuItem value={'History'}>History</MenuItem>
          <MenuItem value={'Linguistics'}>Linguistics</MenuItem>
          <MenuItem value={'Literary Criticism'}>Literary Criticism</MenuItem>
          <MenuItem value={'Oral History'}>Oral History</MenuItem>
          <MenuItem value={'Performance Studies'}>Performance Studies</MenuItem>
          <MenuItem value={'Philosophy'}>Philosophy</MenuItem>
          <MenuItem value={'Political Science'}>Political Science</MenuItem>
          <MenuItem value={'Psychology'}>Psychology</MenuItem>
          <MenuItem value={'Public History'}>Public History</MenuItem>
          <MenuItem value={'Religious Studies'}>Religious Studies</MenuItem>
          <MenuItem value={'Rhetoric/Communication'}>Rhetoric/Communication</MenuItem>
          <MenuItem value={'Sociology'}>Sociology</MenuItem>
          <MenuItem value={'Statistics'}>Statistics</MenuItem>
          <MenuItem value={'Theology'}>Theology</MenuItem>
          <MenuItem value={'N/A'}>N/A</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
  };














