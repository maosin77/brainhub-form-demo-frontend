import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography/Typography';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import apiClient from '../../httpClient/apiClient';
import { User } from '../../types/user';
import { useStyles } from './AddUserForm.styles';

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
        reset,
        formState: { errors, isSubmitSuccessful, isSubmitting, isValidating },
    } = useForm<User>({
        defaultValues: { eventDate: new Date() },
        mode: 'onSubmit',
        resolver: yupResolver(CreateFormSchema),
    });

    const [isRequestError, setRequestError] = useState(false);
    const [isUserRegisteredSucessful, setIsUserRegisteredSucessful] =
        useState(false);

    const onSubmit = async (newUser: User) => {
        setRequestError(false);
        setIsUserRegisteredSucessful(false);

        try {
            await apiClient.createUser(newUser);
            setIsUserRegisteredSucessful(true);
        } catch (err) {
            setRequestError(true);
        }
    };

    useEffect(() => {
        reset(
            { firstName: '', lastName: '', email: '', eventDate: undefined },
            { keepIsSubmitted: true },
        );
    }, [isSubmitSuccessful]);

    useEffect(() => {
        if (isValidating) {
            setIsUserRegisteredSucessful(false);
        }
    }, [isValidating]);

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
                data-cy="addUserForm-input-firstName"
            />
            <TextField
                {...register('lastName')}
                label="Last name"
                error={Boolean(errors.lastName)}
                helperText={errors.lastName?.message}
                data-cy="addUserForm-input-lastName"
            />
            <TextField
                {...register('email')}
                label="Email"
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
                data-cy="addUserForm-input-email"
            />
            <Controller
                name="eventDate"
                defaultValue={undefined}
                control={control}
                render={({ field: { onChange, value } }) => {
                    return (
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Event date"
                                value={value}
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

            <Button
                variant="contained"
                type="submit"
                disabled={isSubmitting}
                data-cy="addUserForm-button-submit">
                {isSubmitting ? 'Submitting' : 'Submit'}
            </Button>

            {isUserRegisteredSucessful && (
                <Alert severity="success">User registered successfully!</Alert>
            )}

            {isRequestError && (
                <Alert severity="error">Something went wrong.</Alert>
            )}
        </form>
    );
};
