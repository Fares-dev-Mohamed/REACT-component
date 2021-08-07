import React, {component} from 'react';
import Image from "./FARES.jpg";

const ProfilePhoto= ()=> {
  return (
    <div className="ProfilePhoto">
     <img src={Image} alt ='Image' style ={{width:"250px", height:"300px"}} />
    </div>
  );
}

export default ProfilePhoto;