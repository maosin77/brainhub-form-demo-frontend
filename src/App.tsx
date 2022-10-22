import { CssBaseline, ThemeProvider } from '@mui/material';
import { Form } from './components/Form/Form';
import { Layout } from './components/Layout/Layout';
import { theme } from './styles/muiTheme';

function App() {
    return (
        <div className="App">
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Layout>
                    <Form />
                </Layout>
            </ThemeProvider>
        </div>
    );
}

export { App };
