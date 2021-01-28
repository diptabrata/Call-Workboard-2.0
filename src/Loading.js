import React, { Component }  from 'react';
 import { makeStyles } from '@material-ui/core/styles';
 import CircularProgress from '@material-ui/core/CircularProgress';
import { render } from '@testing-library/react';

export default function Loading (){
 
   
        return(
            <div style={{display:'flex',justifyContent:'center',color:"blue",marginBottom:'10%',marginTop:'10%'}}>
            <CircularProgress size="20rem" color="blue"/>
            </div>
          
        );
    }  