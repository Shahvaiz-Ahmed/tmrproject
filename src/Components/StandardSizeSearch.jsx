import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

function StandardSizeSearch() {
  return (
    <div className="StandardSizeSearch">
        <h2>Standard Size</h2>
        <p><strong>Switch</strong> between mm and in</p>
        <p><strong>Switch</strong> between US, Metric and USA</p>

        <div className="tabl">
        <FormControl fullWidth>
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
    Standard Size
  </InputLabel>
  <NativeSelect
    defaultValue={30}
    inputProps={{
      name: 'Standard Size',
      id: 'uncontrolled-native',
    }}
  >
    <option value={10}>USA</option>
    <option value={20}>Metric</option>
    <option value={30}>US</option>
  </NativeSelect>
</FormControl>
        </div>

    </div>
  )
}

export default StandardSizeSearch