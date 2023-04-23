
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/Main';
import Subject from './components/Subject';
import SearchBySubject from "./components/SearchBySubject";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/javascript' element={<Subject tmp="javascript"/>} />
        <Route exact path='/harry_potter' element={<Subject tmp="harry_potter" />} />
        <Route exact path='/comedy' element={<Subject tmp="comedy" />} />
        <Route exact path="/love" element={<Subject tmp="love" />} />
        <Route exact path="/politics" element={<Subject tmp="politics" />} />
        <Route exact path="/search-by-subject/:text" element={<SearchBySubject />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
