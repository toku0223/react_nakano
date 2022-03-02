import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';



const App = () => {


  return (
    <div>
      <Router>
        <Routes>
          <Route path="/componenta" element={<ComponentA />} />
          <Route path="/componentb" element={<ComponentB />} />
          <Route path="/componentc" element={<ComponentC />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
