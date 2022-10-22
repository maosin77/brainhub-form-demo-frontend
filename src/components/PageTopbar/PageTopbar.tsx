import Typography from '@mui/material/Typography/Typography';
import styles from './PageTopbar.module.css';

const PageTopbar = () => {
    return (
        <div className={styles.container}>
            <Typography>Brainhub-demo</Typography>
        </div>
    );
};

export { PageTopbar };
