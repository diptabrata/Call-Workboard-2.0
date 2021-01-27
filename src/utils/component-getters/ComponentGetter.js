import React from "react";
import { MY_RENDER_APP } from "../Constants";
import FirstCard from '../../components/homePage/FirstCard';
import SecondCard from "../../components/homePage/SecondCard";

function componentGetter(props){

  const {componentID} = props;
  const {data}=props;

  
    switch (componentID) {
      case MY_RENDER_APP.FIRST_CARD:
        return (                   
            
              <FirstCard data={data}/>         
        );
      case MY_RENDER_APP.SECOND_CARD:
        return (
              <SecondCard data={props.totaldata}  />
        );
     
      default:
        return null;
        }
}

export default componentGetter;

