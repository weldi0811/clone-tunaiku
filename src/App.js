import React from 'react';
import Home from './components/Home'
import {BrowserRouter, Route} from 'react-router-dom'
import Summary from './components/Summary'


function App() {
  return (
    <BrowserRouter>
      <Route path ='/' exact component={Home} />
      <Route path ='/summary' component={Summary} />
    </BrowserRouter>
  );
}

export default App;
