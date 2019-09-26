import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import { Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={MainPage} />
    </div>
  );
}

export default App;