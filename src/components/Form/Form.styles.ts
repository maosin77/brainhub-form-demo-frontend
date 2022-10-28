import { createStyles, makeStyles } from '@material-ui/core';
import { vars } from '../../styles/vars';

export const useStyles = makeStyles(() =>
    createStyles({
        container: {
            maxWidth: 350,
            display: 'flex',
            flexDirection: 'column',
            gap: vars.sizing.defaultSpacing,
            padding: vars.sizing.defaultSpacing,
            boxShadow: vars.defaultBoxShadow,
        },
    }),
);
