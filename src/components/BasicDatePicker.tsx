import * as React from 'react';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface BasicDateProps {
  value: Dayjs | null;
  setValue: (value: Dayjs | null) => void;
}

export const BasicDatePicker: React.FC<BasicDateProps> = (props) => { 

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={props.value}
        onChange={(newValue: any) => {
          props.setValue(newValue);
        }}
        renderInput={(params: any) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}