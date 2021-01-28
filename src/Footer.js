import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
 root: {
 
   backgroundColor:'#58687E',
   display:'flex',
   justifyContent:'space-between',
   
},

footer: {
   padding:'0%',
   height:'10vh',
  // position:'fixed',
  
  display : 'flex',
  justifyContent:'flex-end',
  color:'#FFFFFFA6',
  marginTop:'-1vh',

  ['@media (min-width:982px)']:{
  
    padding:'0%',
   },

  ['@media (min-width:1024px)']:{
    marginTop:'-2vh',
    padding:'-0.1%',
   },
   ['@media (min-width:1920px)']:{
    marginTop:'auto'
   },
  
   ['@media (min-width:3840px)']:{
    marginTop:'-0.1vh',
    padding:'0.1%',
   },
  
},
footerleft:{
   color:'#FFFFFFA6',
   marginLeft:'1.5vw',
   ['@media (min-width:982px)']:{
  
    padding:'0%',
   },

  ['@media (min-width:1024px)']:{
    marginTop:'-2vh',
    padding:'-0.1%',
   },
   ['@media (min-width:1920px)']:{
    marginTop:'-0.1vh'
   },
  
   ['@media (min-width:3840px)']:{
    marginTop:'-0.1vh',
    padding:'0.1%',
   },
}
}));
export default function Footer(props) {
 
  // const l=this.props.data.length;
const classes = useStyles();
const {data}=props;
let l=0;
if (data){
l=data.length;
}
// console.log("footer",l);


return (
  <div  className={classes.root}>
    <div className={classes.footerleft}>
      <Typography>
        Viewing 1-5 of {l}
      </Typography>
       
    </div>
   
    <div className={classes.footer}>
      
    <Typography > © Copyright 2020 HighRadius. All Rights Reserved. </Typography>
    </div>
  </div>
);
}

