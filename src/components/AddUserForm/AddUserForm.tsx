import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography/Typography';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useStyles } from './AddUserForm.styles';
import { User } from '../../types/user';
import apiClient from '../../httpClient/apiClient';

export const AddUserForm: React.FC = () => {
    const classes = useStyles();

    const CreateFormSchema = yup.object({
        firstName: yup
            .string()
            .min(3, 'First name should contain at least 3 letters.')
            .required('First name is required.'),
        lastName: yup
            .string()
            .min(3, 'Last name should contain at least 3 letters')
            .required('Last name is required.'),
        email: yup
            .string()
            .email('The Email is invalid.')
            .required('Email is required.'),
        eventDate: yup.date().required('Event date is required.'),
    });

    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = useForm<User>({
        mode: 'onSubmit',
        resolver: yupResolver(CreateFormSchema),
    });

    const onSubmit = async (newUser: User) => {
        try {
            await apiClient.createUser(newUser);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form className={classes.container} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Typography variant="h3">Registration Form</Typography>
                <Typography variant="h4">
                    Fill out the form carefully
                </Typography>
            </div>

            <TextField
                {...register('firstName')}
                label="First name"
                error={Boolean(errors.firstName)}
                helperText={errors.firstName?.message}
            />
            <TextField
                {...register('lastName')}
                label="Last name"
                error={Boolean(errors.lastName)}
                helperText={errors.lastName?.message}
            />
            <TextField
                {...register('email')}
                label="Email"
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
            />
            <Controller
                name="eventDate"
                control={control}
                render={({ field: { onChange, value } }) => {
                    return (
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Event date"
                                value={value ?? ''}
                                onChange={onChange}
                                renderInput={params => (
                                    <TextField
                                        {...params}
                                        error={Boolean(errors.eventDate)}
                                        helperText={errors.eventDate?.message}
                                    />
                                )}
                            />
                        </LocalizationProvider>
                    );
                }}
            />

            <Button variant="contained" type="submit">
                Submit
            </Button>
        </form>
    );
};
