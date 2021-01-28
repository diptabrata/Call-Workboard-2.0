import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Divider } from '@material-ui/core';
import { getData } from './apicall/Apicalling';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
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
  align:{
  display:'flex',
  maxHeight:'5vh',
  position:'fixed',
  "&$selected": {
    color:'white',
  },
  selected: {}
  },

  tabtext:{
    display:'flex',
    color:'#5DAAE0BF',
    fontSize:'0.8rem',
    
    flexGrow: 1,
    ['@media (min-width:982px)']:{
      height:'2vh'
     },
     ['@media (min-width:3840px)']:{
      height:'5vh'
     },
    
    
  
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
  spaninstyle:{
    color:'white',
    fontSize:'0.8rem',
  },
  subtitlespan:{
    fontSize:'0.7rem',
  },
  spanmax:{
    color:'#FFFFFFA6',
    fontSize:'0.8rem',
  },
  spandivision:{
    color:'#FFFFFFA6',
    fontSize:'1.5rem',
  },
 
});

export default function Tabfile(props) {
  const {data}=props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const totalcustcount=data?data.overview.totalCustomerCount:"";
  const processedcustcount=data?data.overview.processedCustomerCount:"";
  const totalcalling=data?data.overview.TotalCustomersToCall:"";
  const totalcalled=data?data.overview.TotalCustomersCalled:"";
  const timetospentoncall=data?data.overview.expectedCallingMinutes:"";
  const timespentoncall=data?data.overview.completedCallingMinutes:"";
  const totalPastDueAmount=data?data.overview.totalPastDueAmount:"";
  const totalPastDueProcessed=data?data.overview.totalPastDueProcessed:"";

  return (
    <Paper className={classes.tabbar} elevation={0} > 
    <div>
   
      <div className={classes.align}>
        <Tabs  
        TabIndicatorProps={{style: {background:'#FFFFFF'}}}
        // selectedTextColor= {{style: {background:'#FFFFFF'}}}
          value={value}
          onChange={handleChange}
          
          position="fixed"    
          
        >
            
          <Tab label={<span className={classes.tabtext} style={{color:'white'}}>TO CALL LIST({totalcustcount})</span>}/>
          <Tab label={<span className={classes.tabtext} >FINISHED CALL LIST({processedcustcount})</span>}/>
        
        </Tabs>
      </div>
    </div>
    <div className={classes.outertab}>
          <div className={classes.innertab}>
            <div style={{color:'#FFFFFFA6'}}>
             <span className={classes.spanstyle}>{totalcalled}</span><span className={classes.spandivision}>/</span><span className={classes.spanmax}>{totalcalling}</span>
            </div>
            <div style={{color:'#5DAAE0'}}>
            <Typography className={classes.subtitlespan}>  Total Customer Called  </Typography>
            </div>
          </div>
          <Divider orientation="vertical" flexItem />
          <div className={classes.innertab}>
            <div style={{color:'#FFFFFFA6'}}>
              <span className={classes.spanstyle}>{Math.round(timespentoncall/60)}</span>
              <span className={classes.spaninstyle}>hr</span>
              <span className={classes.spanstyle}>&nbsp;{Math.round(timespentoncall%60)}</span>
              <span className={classes.spaninstyle}>min</span> <span className={classes.spandivision}>/</span><span className={classes.spanmax}>{timetospentoncall/60}hr</span>
            </div>

            <div style={{color:'#5DAAE0'}}>
            
            <Typography className={classes.subtitlespan}> Total Time Spent on Call </Typography>
            </div>
          </div>
          <Divider orientation="vertical" flexItem />
          <div className={classes.innertab}>
            <div style={{color:'#FFFFFFA6'}}>
            <span className={classes.spanstyle}>${totalPastDueProcessed}</span><span className={classes.spandivision}>/</span><span className={classes.spanmax}>${totalPastDueAmount}M</span>
            </div>
            <div style={{color:'#5DAAE0'}}>
            <Typography className={classes.subtitlespan}>  Total Past Due Touched </Typography>
            </div>
          </div>
    </div>
</Paper>
  );
}
