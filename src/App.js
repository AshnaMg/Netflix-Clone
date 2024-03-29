import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import Banner from './Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {action,comedy, originals} from './Urls'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title={'Netflix Originals'} />
      <RowPost url={action} title={'Action'} isSmall isYT />
      <RowPost url={comedy} title={'Comedy'} isSmall isYT />
    </div>
  );
}

export default App;
