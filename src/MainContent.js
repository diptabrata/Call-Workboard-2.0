import React, { useEffect, useState}  from 'react';
 import { makeStyles } from '@material-ui/core/styles';
 import { Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FreedaIcon from './images/Freeda.svg';
import SearchIcon from './images/search.svg';
import { getData } from './apicall/Apicalling';
import Body from './Body';
import InputBase from '@material-ui/core/InputBase';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Footer from './Footer';
import LeftIc from './images/Left.svg';
import RightIc from './images/Right.svg';
import Tabfile from './Tabfile';
import HomePage from '../src/views/HomePage'
import Fab from '@material-ui/core/Fab';
 const useStyles = makeStyles(theme => ({
  
   root:{
     flexGrow:1,
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
  marginTop:15,
  marginRight:10,
  marginLeft:10,
  fontSize:'1.9vw',
  color:'white',
 
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
  borderRadius:'20px',
  alignItems:'center',
  height:'6vh',
  marginTop:'1vh',
 
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
  
  justifyContent:'space-around',
   marginLeft:'12vw',
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
    width:'10vw',
    height:'2.5vh',
    border:'1px solid #FC7500 ',
    borderRadius:'8px',
    marginLeft:'20vw',
    ['@media (min-width:3840px)']:{
      borderRadius:'20px',
      width:'10vw',
       height:'3vh',
     },
  },
  outertab:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-end',
    marginRight:'1vw',
    
  },
  innertab:{
    paddingRight:'1vw',
    paddingLeft:'1vw',
    paddingTop:0,
    marginLeft:'auto',
    marginRight:'auto',
    
    // position:'fixed'
  },
  tabbar:{
    display:'flex',
    justifyContent:'space-between',
    backgroundColor:'#58687E',
    ['@media (min-width:3840px)']:{
     fontSize:'1.5rem'
    },
    
  },
  tabtext:{
    display:'flex',
    color:'white',
    fontSize:'1rem',
    // ['@media (min-width:982px)']:{
    //   fontSize:'1rem'
    //  },
    // ['@media (min-width:3840px)']:{
    //   fontSize:'1rem'
    //  },
     
  },
  spanstyle:{
    color:'white',
    fontSize:'1.5rem',
    
     
  },
  centerboxtext:{
    color:'white',fontSize:'0.8vw',
    // ['@media (min-width:3840px)']:{
    //   fontSize:'2rem'
    //  },
    
  },
 

}));
function MainContent() {
  const classes = useStyles(); 
  // const [value, setValue] = useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // }
  const [data, setData]=React.useState(null);

  useEffect(() => {
    const fetchData=async()=>{
      const record=await getData();
      setData(record);
      }
      fetchData();
  }, [])

  
console.log("MAIN",data);
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
       <Fab variant="extended" className={classes.freedadiv}>
        <Typography variant='h6'  style={{color:'white',display:'flex', alignItems:'center',fontFamily:'Roboto,Regular' , fontSize:'1.2vw'}}> FREEDA
        <img src={FreedaIcon} alt="FreedaIcon" className={classes.Icon}  />
       </Typography>
       </Fab>
        </Typography>
    </div>
   
  {/* Tabs & Summary */}
  <div>
  <Tabfile data={data && data}/>
  </div> 
  
 {/* Charts */}
    <div className={classes.content}>
    <HomePage data={data && data.workbookItems}/>
  {/* <Body data={data && data}/> */}
    </div>
    {/* Footer */}
    <div className={classes.footer}>
    <Footer/>
    </div>
  </main>

);
}
export default MainContent;
