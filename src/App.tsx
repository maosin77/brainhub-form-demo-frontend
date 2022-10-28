import { CssBaseline } from '@mui/material';
import { Layout } from './components/Layout/Layout';
import { DashboardPage } from './pages/Dashboard/Dashboard';
import { ThemeProvider } from './context/ThemeContext';

function App() {
    return (
        <div className="App">
            <CssBaseline />
            <ThemeProvider>
                <Layout>
                    <DashboardPage />
                </Layout>
            </ThemeProvider>
        </div>
    );
}

export { App };
