// This is the entrypoint for the web application
// It renders the react application in the root element
// It also initializes the web vitals API to track user experience

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import LoginSplashScreen from './pages/LoginSplashScreen.jsx';
import Home from './pages/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginSplashScreen />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
