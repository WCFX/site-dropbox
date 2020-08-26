import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import GlobalStyles from './config/GlobalStyles';
import Section from './components/Section';


function App() {
  return (
    <>
      <BrowserRouter>
        <Route />
        <Section />
        <GlobalStyles />
      </BrowserRouter>
    </>
  )
}

export default App;
