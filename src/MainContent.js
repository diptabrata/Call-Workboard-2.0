import React, { useEffect, useState}  from 'react';
 import { makeStyles } from '@material-ui/core/styles';
 import { Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FreedaIcon from './images/Freeda.svg';
import SearchIcon from './images/search.svg';
import { getData } from './apicall/Apicalling';
import InputBase from '@material-ui/core/InputBase';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import clsx from "clsx";
import Footer from './Footer';
import LeftIc from './images/Left.svg';
import RightIc from './images/Right.svg';
import Tabfile from './Tabfile';
import HomePage from '../src/views/HomePage'
import Fab from '@material-ui/core/Fab';
import Loading from './Loading'
import {CssBaseline, Drawer} from "@material-ui/core";
import Freeda from './Freeda';
import { useDispatch, useSelector } from 'react-redux';
 const useStyles = makeStyles(theme => ({
  
   root:{
     flexGrow:0,
     backgroundColor:'#58687E',
   },
 content: {
  
   
    
},
fullWidth: {
  width:'auto',
  backgroundColor:'#58687E',
  

['@media (min-width:1920px)']:{
  width:'94.7vw'
},
['@media (min-width:3840px)']:{
  width:'97vw'
},
},
header: {
  display:'flex',
  fontSize:'2vw',
  color:'#5DAAE0',
  justifyContent:'center',
  
},
headerarrow: {
  marginTop:'1.5vh',
  marginRight:'1vw',
  marginLeft:'-2vw',
  fontSize:'1.9vw',
  color:'white',
  ['@media (min-width:982px)']:{
    marginLeft:'-0.2vw',
  },
},
title: {
  fontSize:'1vw',
  color:'#5DAAE0',
},
Icon:{
  width:'3vw',
  ['@media (min-width:1920px)']:{
    width:'3vw',
  },
  ['@media (min-width:3840px)']:{
    width:'5vw',
    height:'7vh',
  },

},
Searchbox:{
  display:'flex',  
  border: '1px solid #5DAAE0',
  borderRadius:'5rem',
  alignItems:'center',
  height:'6vh',
  marginTop:'1vh',
 marginRight:'-9vw',
  ['@media (min-width:3840px)']:{
    borderRadius:'50px',
    height:'6vh',
    width:'14vw'
  },
},
Searchinput:{
  display:'flex', 
  color: '#FFFFFF80',
 
},


freedadiv:{
  marginTop:'1vh',
  backgroundColor:'#FC7500', 
  width:'9vw',
  borderRadius:'10vw',  
  display:'flex',
  height:'7vh',
  "&:hover": {
    backgroundColor:'#FC7500', 
  },
  
  justifyContent:'space-around',
   marginLeft:'14vw',
   ['@media (min-width:1920px)']:{
    width:'8vw',
    height:'7vh',
  },
  ['@media (min-width:3840px)']:{
    width:'10vw',
    height:'7vh',
  },

  },
  
  smallicon:{
    width:'0.4rem',
    display:'flex',
    transform:'scale(-1)',
    
  },
  centerbox:{
    display:'flex',
    justifyContent:'center',
    backgroundColor:'#FC7500',
    width:'10.5vw',
    height:'2.5vh',
    border:'1px solid #FC7500 ',
    borderBottomLeftRadius:'50vw',
    borderBottomRightRadius:'50vw',
    marginLeft:'20vw',
    ['@media (min-width:3840px)']:{
      borderBottomLeftRadius:'30vw',
      borderBottomRightRadius:'30vw',
      width:'11vw',
       height:'3vh',
     },
  },

  centerboxtext:{
    color:'white',fontSize:'0.8vw',
    // ['@media (min-width:3840px)']:{
    //   fontSize:'2rem'
    //  },
    
  },
 

}));
function MainContent() {
 
  const counter=useSelector( (state)=> state.toggle);  
  const dispatch=useDispatch();
  const classes = useStyles(); 
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  const [data, setData]=React.useState(null);

  useEffect(() => {
    const fetchData=async()=>{
      const record=await getData();
      setData(record);
      }
      fetchData();
  }, [])

 
return (
  
  <main className={classes.fullWidth}>
    {/* Header */}
    
    <div >
  
      <Typography variant='h6'className={classes.header}  >
      <ArrowBackIcon className={classes.headerarrow} />
        Call&nbsp;Workboard  
        <div className={classes.centerbox}>
        <img src={LeftIc} alt="icon" className={classes.smallicon}/>
        <Typography variant='h6' className={classes.centerboxtext} >Autonomous&nbsp;Receivables</Typography>
        <img src={RightIc} alt="icon" className={classes.smallicon}/>
        </div>
        <div style={{marginLeft:'10vw'}} className={classes.Searchbox} >
        <img src={SearchIcon} alt="SearchIcon" className={classes.Icon}  />
        
      <InputBase className={classes.Searchinput} placeholder="Search Name"/>
      <ArrowDropDownIcon />
        </div>
       <Fab variant="raised" className={classes.freedadiv} onClick={(()=> dispatch({type:'TOGGLE'}))}>
        <Typography variant='h6'  style={{color:'white',display:'flex', alignItems:'center',fontFamily:'Roboto,Regular' , fontSize:'1.2vw'}}> FREEDA
        <img src={FreedaIcon} alt="FreedaIcon" className={classes.Icon}  />
       </Typography>
       </Fab>
       <Freeda open={counter} dispatch={dispatch}/>
        </Typography>
    </div>
    
  {/* Tabs & Summary */}
  <div>
  <Tabfile data={data && data}/>
  </div> 
  
 {/* Charts */}

 {!data && <Loading/>}
  <div className={classes.content}>
  
    <HomePage data={data && data.workbookItems}/>
   {/* <Loading/> */}
    </div>
    
    {/* Footer */}
    <div className={classes.footer}>
    <Footer data={data && data.workbookItems}/>
    </div>
    <CssBaseline />


  </main>

);
}
export default MainContent;
