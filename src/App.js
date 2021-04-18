import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Insert from './component/Insert';
import View from './component/View';
import Nav from './component/Nav';
import Edit from './component/Edit';
import Single_view from './component/Single_view';


function App() {
  return (
    <>
      <Router>
        <switch>
          <Nav />
          <Route exact path="/"><Insert /></Route>
          <Route path="/edit"><Edit /></Route>
          <Route path="/view"><View /></Route>
          <Route path="/single_view"><Single_view /></Route>
        </switch>
      </Router>
    </>
  );
}
export default App;