import { createStyles, makeStyles } from '@material-ui/core';
import { vars } from '../../styles/vars';

export const useStyles = makeStyles(
    createStyles({
        container: {
            borderBottom: `1px solid ${vars.colors.lightGrey}`,
            display: 'flex',
            alignItems: 'center',
            height: vars.sizing.pageTopbarHeight,
            padding: `0 ${vars.sizing.defaultSpacing}px`,
        },
    }),
);
