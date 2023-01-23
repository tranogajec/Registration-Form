import React from 'react';
import 'dayjs/locale/de';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const LOCALE = 'de'

export const DateInput = ({ id, onChange, value }) =>
    <LocalizationProvider adapterLocale={LOCALE} dateAdapter={AdapterDayjs} id={id}>
        <DatePicker
            onChange={onChange}
            renderInput={props => <TextField {...props} />}
            value={value ? value : null}
        />
    </LocalizationProvider>
