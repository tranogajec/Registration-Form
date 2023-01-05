import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import 'dayjs/locale/de';

const LOCALE = 'de'

export const DateInput = ({ id, onChange, value }) => {
    return (
        <LocalizationProvider id={id} dateAdapter={AdapterDayjs} adapterLocale={LOCALE}>
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