import { Paper, Grid } from '@mui/material';
import { AddUserForm } from '../../components/AddUserForm/AddUserForm';
import { useStyles } from './Dashboard.styles';

export const DashboardPage = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.container}>
            <Grid container justifyContent="center" paddingTop={10}>
                <AddUserForm />
            </Grid>
        </Paper>
    );
};
