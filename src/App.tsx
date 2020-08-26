import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import GlobalStyles from './config/GlobalStyles';


function App() {
  return (
    <>
      <BrowserRouter>
      
        <GlobalStyles />
      </BrowserRouter>
    </>
  )
}

export default App;
