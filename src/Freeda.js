import React from 'react';
import { Drawer,Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import FreedaIcon from './images/Freeda.svg';
const useStyles = makeStyles(theme => ({
root:{
    display:'flex',
    width:'25vw',
    backgroundColor:'#2D4250',
    flexDirection:'column',
    height:'100vh',
    
},
drawer:{
    top:'9vh',
    height:'95vh',
    borderTop:'0.25rem solid #FC7500'
},
textstyle:{
    color:'#FFFFFF',opacity: 0.65,
    fontSize:'1.5rem',
},
content:{
    color:'#FFFFFF',opacity: 0.65,
    fontSize:'1rem',
    marginLeft:'5%'
},
closeicon:{
    "&:hover": {
        backgroundColor:'red', 
      },
      size:'3vh'
},
freediv:{
    transform: 'scaleX(-1)',display:'flex',justifyContent:'flex-end',margin:'5%',
},
freeicon:{
  height:'5vh',
  width:'5vh',
},

}));

export default function Freeda(props) {
    const classes = useStyles();    
// console.log("Freeda",props)
    return(


<Drawer
        anchor="right"
        open={props.open}
        onOpen={(()=> props.dispatch({type:'TOGGLE'}))}
        onClose={(()=> props.dispatch({type:'TOGGLE'}))} 
        classes={{paper:classes.drawer}}
      >
<div className={classes.root}>
         <div style={{display:'flex',justifyContent:'space-between',margin:'2vh'}}> <Typography className={classes.textstyle}>FREEDA</Typography><div className={classes.textstyle}><CloseIcon className={classes.closeicon} onClick={(()=> props.dispatch({type:'TOGGLE'}))}/></div> </div>
          <div className={classes.freediv}>
         <img src={FreedaIcon} alt="Icon" className={classes.freeicon}/>
          </div>
          <div>
              <Typography className={classes.content}>
              Hi John, how can I help you?
              </Typography>
          </div>
</div>
      </Drawer>
);
        }