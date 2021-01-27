import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

import CardHeader from '@material-ui/core/CardHeader';
import { Typography } from '@material-ui/core';
import Histogram  from './Highchart';

import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles(theme => ({
root:{
  display:'flex',
  
},
cardimage:{
  padding:'10%',height:'10vh'
}
}));
export default function FirstCard(props) {
  const classes = useStyles(); 
    return (
  
      <Card  style={{backgroundColor:"#273D49BF",height:'37vh'}}>
            <div>
         <CardHeader title={<Typography style={{color:'#FFFFFF80',fontFamily:'Roboto',fontWeight:'bold',fontSize:'1rem'}}>Remaining Balance Summary</Typography>}/>
       
       {/* <Typography style={{color:'#FFFFFF80',fontFamily:'Roboto',fontSize:'1rem',display:'flex',flexDirection:'row-reverse',marginTop:'-4vh',paddingRight:'3%'}} >32323232323</Typography> */}
       </div>
       
        <div className={classes.root}>
        {/* <Histogram /> */}
           <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
           <div>
             {/* <img src={PromiseIcon} alt="Promise" className={classes.cardimage}/> */}
           </div>
              <div>
                {/* <Typography style={{color:'#FFFFFF80',fontFamily:'Roboto',fontSize:'1.2rem',padding:'10%'}}>No Broken Promises</Typography> */}
                
              </div>
           </div>
        </div>
      </Card>


    );
}
