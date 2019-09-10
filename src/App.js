import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';


import Layout from './components/Layout/Layout';
import AppRouter from './AppRouter/AppRouter';


function App(props) {
  return (
    <Router>
      <div className="container App" >
        <Layout />
        <div className="marginTopMenu">
          <AppRouter />
        </div>
      </div>
    </Router>
  );
}



export default App;
