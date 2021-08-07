import React, {component} from 'react';
import Adress from './Adress';
import FullName from './FullName';
import ProfilePhoto from './ProfilePhoto';
import Email from './email';
import Numero from './numero';

function Profile() {
    return (
      <div style ={{ backgroundColor:" rgb(233, 229, 229)", width:"300px", margin:"30px", textAlign:"center"}}>
       <ProfilePhoto/>
       <FullName/>
       <Email/>
       <Numero/>
       <Adress/>
       
      </div>
    );
  }
  
  export default Profile;