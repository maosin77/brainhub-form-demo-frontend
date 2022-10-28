import React, { PropsWithChildren } from 'react';
import { PageTopbar } from '../PageTopbar/PageTopbar';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div>
            <PageTopbar />
            {children}
        </div>
    );
};

export { Layout };
