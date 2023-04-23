import './comp.css';
import React from 'react';
import SearchBook from './SearchByName';
import SubjectDetail from './SubjectPart';

function Main() {
  return (
    <div className="App">
       <div className="part-1">
           <SubjectDetail />
       </div>
       <div className="part-2">
           <SearchBook />
       </div>
    </div>
  );
}

export default Main;