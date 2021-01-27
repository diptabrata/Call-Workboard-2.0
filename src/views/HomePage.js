import React from 'react';
import Render from '../components/utilityComponents/Render';
export default function Homepagecomponent ({data}){
   
  
    return(
        <div style={{height:'82vh',width:'95vw',padding:'1rem',boxSizing:'border-box',}}>
        { data &&
            <Render data={data}/>
        }  
        </div>
      
    );
}  
