import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ConnectedNetworksPage from './pages/ConnectedNetworksPage';
import { ThemeProvider } from '@mui/material';
import { appTheme } from './themes/theme';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={appTheme}>
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/networks' element={<ConnectedNetworksPage />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;