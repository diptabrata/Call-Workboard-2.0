import React, { Component }  from 'react';
 import { makeStyles } from '@material-ui/core/styles';
 import CircularProgress from '@material-ui/core/CircularProgress';
import { render } from '@testing-library/react';

export default function Loading (){
 
    
        return(
            <div style={{display:'flex',justifyContent:'center'}}>
            <CircularProgress size="50rem" color="blue"/>
            </div>
          
        );
    }  