import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/settings" element={<Settings setThemeMode={setThemeMode} />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
