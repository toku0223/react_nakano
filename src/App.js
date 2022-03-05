import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ComponentA from './Components/ComponentA';
import ComponentB from './Components/ComponentB';
import ComponentC from './Components/ComponentC';
import Home from './Home';





const App = () => {


  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/componenta" element={<ComponentA />} />
          <Route path="/componentb" element={<ComponentB />} />
          <Route path="/componentc" element={<ComponentC />} />
        </Routes>
      </Router>
    </div>
  );
};


export default App;
