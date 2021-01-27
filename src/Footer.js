import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
 root: {
 
   backgroundColor:'#58687E',
   
},

footer: {
   padding:'0%',
   height:'4.5vh',
  // position:'fixed',
  fontSize: '2vh',
  width: '100%',
  display : 'flex',
  justifyContent:'flex-end',
  backgroundColor:'#58687E',
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
}));
function Footer() {
const classes = useStyles();
return (
  <div  className={classes.root}>
    <Typography className={classes.footer}>
      © Copyright 2020 HighRadius. All Rights Reserved.
    </Typography>
  </div>
);
}
export default Footer;