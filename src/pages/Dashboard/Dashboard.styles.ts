import { createStyles, makeStyles } from '@material-ui/core';
import { vars } from '../../styles/vars';

export const useStyles = makeStyles(() =>
    createStyles({
        container: {
            height: `calc(100vh - ${vars.sizing.pageTopbarHeight}px)`,
        },
    }),
);
