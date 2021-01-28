import React, { useState } from "react";
import {
  Divider, IconButton,  Drawer,  List,  ListItem,ListItemIcon,  ListItemText, CssBaseline, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
const drawerWidth= 476;

const useStyles = makeStyles((theme) => ({
  
  root:{
    display:'flex',
    fontFamily:'Roboto',
    
  },
  fabDesign:{
    backgroundColor:'#2D4250',
    marginLeft:'10vw',
    color:'white',
    ['@media (min-width:1920px)']:{
      marginLeft:'12vw',
      width:'5vw'
    },
    ['@media (min-width:3840px)']: {
      marginLeft:'12vw',
      width:'5vw',
      height:'2.5vh'
    }

  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginTop:'auto',
    marginLeft:'auto',
  },
  title: {
    marginRight: "auto"
  },
  drawer: {
    width: drawerWidth,
    backgroundColor:'#5DAAE0',
   
    position:'fixed',
    ['@media (min-width:1024px)']:{
      width:drawerWidth,
      
    },
    ['@media (min-width:1920px)']:{
      width:'39vw',
     
    },
    ['@media (min-width:3840px)']:{
      width:'40vw'
    },
  },
  content: {
    padding: theme.spacing(3),
   
  },
  downbar:{
      display:'flex',
      marginTop:'100%',
      color:'white',
      flexDirection:'row', 
      
      ['@media (min-width:982px)']:{
        marginTop:'79vh',
        
      },
  ['@media (min-width:1024px)']:{
    marginTop:'72vh',
    
  },
  ['@media (min-width:1920px)']:{
    marginTop:'82vh',
   
},
  ['@media (min-width:3840px)']:{
    marginTop:'87vh',
    
  },

  },
  avatardown:{
    marginTop:'auto',
    marginRight:'auto',
    marginLeft:'auto',
    ['@media (min-width:982px)']:{
      marginTop:'85vh',
      marginRight:'auto',
      marginLeft:'auto',
},
    ['@media (min-width:1024px)']:{
      marginTop:'85vh',
      marginRight:'auto',
      marginLeft:'auto',
},
    ['@media (min-width:1920px)']:{
      marginTop:'87vh',
      marginRight:'auto',
      marginLeft:'auto',
},
  
['@media (min-width:3840px)']:{
     marginTop:'88vh',
    marginRight:'auto',
    marginLeft:'auto',
   
},
  },
  avataricon:{
    width:'3vw',
    height:'5vh',
   
    ['@media (min-width:1920px)']:{
      height:'5vh',
      width:'3vw', 
},
  
['@media (min-width:3840px)']:{
  height:'5vh',
  width:'3vw'
},
  },
  homeclass:{
    color:'white',
  },
}));

const SideBar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <div style={{display:'flex'}}>
      <div style={{width:'5vw',backgroundColor:'#5DAAE0',display:'flex',flexDirection:'column',height:'100%'}}>
        <div>
        <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={() => setOpen(true)}
          >
            <MenuIcon style={{color:'white',fontSize:'2vw'}} />
            
          </IconButton>
        
        <Divider/>
        </div>
        <div  className={classes.avatardown}>
        
        <Avatar className={classes.avataricon}>J</Avatar>
        
        </div>
      </div>
       <CssBaseline />
      <Drawer open={open} onClose={() => setOpen(false)}>
      <List disablePadding className={classes.drawer} >
        <ListItem >    
        <IconButton
          edge="start"
         
          color="inherit"
          onClick={() => {setOpen(false)}}  >
          <MenuIcon style={{color:'white',fontSize:'2vw'}} />
         &nbsp; <Typography className={classes.homeclass}>Menu</Typography>    
        </IconButton>
        </ListItem>
        <Divider/>
        <ListItem button>
          <ArrowBackIcon style={{color:'white'}} onClick={() => {setOpen(false)}} />
          <ListItemText  primary=" &nbsp; &nbsp; Switch Back To Enterprise UI" style={{color:'white'}} />
        </ListItem>  
        <div className={classes.downbar}>
                {['John Smith',''].map((text,index) => (
                <ListItem key={text}>
                <ListItemIcon>
                    {index%2===0 ? 
                     <Avatar alt="JOHN SMITH"   />           :
                <Fab variant="extended" className={classes.fabDesign}> LOGOUT  </Fab>   }  </ListItemIcon>
                <ListItemText primary={text} />
                </ListItem>
                ))}
                </div>
            </List>
    </Drawer>
    

    </div>
    
    
    );
};

export default SideBar