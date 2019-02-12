import React from 'react';
import { ThemeProvider } from 'styled-components';
import Home from './components/Home/Home';
import { GlobalStyles, theme } from './Global.styles';
import AppRouter from './router/AppRouter';

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <AppRouter>
                    <Home />
                </AppRouter>
            </>
        </ThemeProvider>
    );
}
