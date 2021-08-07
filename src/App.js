import React, {component} from 'react';
import Profile from './components/profile/profile';
import NavBar from  './components/NavBar/NavBar';
import Description from './components/descripition/description';

import './App.css';

function App() {
  return (
    <div className="App" style ={{ border: "solid black", maxWidth:"80%", marginLeft:"10%", height:"800px", backgroundColor:"white"}}>
      <NavBar/>
     <div className="feed" >
       <Profile/>
     <Description/>
     </div>
    
    </div>
  );
}

export default App;
