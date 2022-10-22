import React, { PropsWithChildren } from 'react';
import { PageTopbar } from '../PageTopbar/PageTopbar';
import styles from './Layout.module.css';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.container}>
            <PageTopbar />
            {children}
        </div>
    );
};

export { Layout };
