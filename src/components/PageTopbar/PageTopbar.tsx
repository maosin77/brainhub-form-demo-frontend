import { Grid } from '@material-ui/core';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton, Paper } from '@mui/material';
import Typography from '@mui/material/Typography/Typography';
import { useTheme } from '../../context/ThemeContext';
import { useStyles } from './PageTopbar.styles';

const PageTopbar = () => {
    const classes = useStyles();

    const { theme, toggleTheme } = useTheme();

    return (
        <Paper square elevation={2} className={classes.container}>
            <Grid container justifyContent="space-between" alignItems="center">
                <Typography>Brainhub-demo</Typography>
                <IconButton sx={{ ml: 1 }} onClick={toggleTheme}>
                    {theme.palette.mode === 'dark' ? (
                        <Brightness7Icon />
                    ) : (
                        <Brightness4Icon />
                    )}
                </IconButton>
            </Grid>
        </Paper>
    );
};

export { PageTopbar };
