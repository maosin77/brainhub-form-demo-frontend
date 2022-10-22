import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography/Typography';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import React, { useState } from 'react';
import styles from './Form.module.css';

const Form: React.FC = () => {
    const [value, setValue] = useState<Dayjs | null>(null);

    return (
        <div className={styles.container}>
            <div>
                <Typography variant="h3">Registration Form</Typography>
                <Typography variant="h4">
                    Fill out the form carefully
                </Typography>
            </div>

            <TextField required id="firstName" label="First name" />
            <TextField required id="lastName" label="Last name" />
            <TextField required id="email" label="Email" />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Event date"
                    value={value}
                    onChange={newValue => {
                        setValue(newValue);
                    }}
                    renderInput={params => <TextField {...params} />}
                />

                <Button variant="contained">Submit</Button>
            </LocalizationProvider>
        </div>
    );
};

export { Form };
