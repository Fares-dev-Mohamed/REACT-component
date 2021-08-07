import React, {component} from 'react';


function Description() {
    return (
      <div style ={{ margin:"30px", textAlign:"center", backgroundColor:" rgb(233, 229, 229)"}}>
       <div className="education">  
       <h2> 2010: <span style={{fontWeight:"100"}}> Baccalauréat Technique </span></h2>
       <h2> 2013: <span style={{fontWeight:"100"}}> Cycle préparatoire Technique  </span></h2> 
       <h2> 2017: <span style={{fontWeight:"100"}}> Diplôme National d’ingénieur en Génie chimique procédés  </span></h2> 
       <h2> 2020: <span style={{fontWeight:"100"}}> Responsable Production - Société Sud Potasse  </span></h2>
       <h2> 2021: <span style={{fontWeight:"100"}}> Formation full stack js GO MY CODE  </span></h2>
       </div> 
       <div className="logos" >
       <img className="logo"src="/CONTROLUNION.png" alt="" />
       <img className="logo"src="/ECUMED.jpg" alt="" />
       <img className="logo"src="/SITEP.jpg" alt="" />
       <img className="logo"src="/GCT.png" alt="" />
       <img className="logo"src="/sudpotasse.jpg" alt="" />
       <img className="logo"src="/photo.jpg" alt="" />
       </div>
      </div>
    );
  }
  
  export default Description;