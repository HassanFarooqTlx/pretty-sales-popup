import './App.css';
import { AppProvider, Frame } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import translations from "@shopify/polaris/locales/en.json";
import Home from './Pages/Home';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (

    <BrowserRouter>
      <AppProvider i18n={translations}>
        <Frame>
        <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Frame>      
      </AppProvider>
    </BrowserRouter>

  );
}

export default App;
