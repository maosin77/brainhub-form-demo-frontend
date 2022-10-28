import { Paper, Grid } from '@mui/material';
import { Form } from '../../components/Form/Form';
import { useStyles } from './Dashboard.styles';

export const DashboardPage = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.container}>
            <Grid container justifyContent="center" paddingTop={10}>
                <Form />
            </Grid>
        </Paper>
    );
};
