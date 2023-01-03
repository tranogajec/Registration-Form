import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export const InputDate = ({ id, onChange, value }) => {
    return (
        <LocalizationProvider id={id} dateAdapter={AdapterDayjs}>
            <DatePicker
                onChange={onChange}
                value={value}
                renderInput={(props) => {
                    return <TextField {...props} />
                }}
            />
        </LocalizationProvider>
    );
}