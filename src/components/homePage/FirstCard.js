import React, {useEffect} from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import { Typography } from '@material-ui/core';
import Histogram  from './Highchart';
import PromiseIcon from '../../images/Promise.svg';
import BrokenIcon from '../../images/Broken.svg';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import { nanoid } from 'nanoid';

const useStyles = makeStyles(theme => ({
root:{
  display:'flex',
  
},
cardimage:{
  padding:'10%',
  height:'10vh'
}
}));
export default function FirstCard(props) {
  const [num]=React.useState(nanoid);
  const classes = useStyles(); 

  
const {data}=props;
// console.log("FIRST",data);
const customername=data?data.customerName:'';
const customerid=data?data.customerNumber:'';
const Totalbroken=data?data.totalBrokenPromises:'';
const Pendingamount=data?data.pastDueBucketDocumentAmount:[];
const BName=data?data.bucketNames:[];
const totalopenamount=data?data.totalCurrentOpenAmount:'';
var promise="";
var imageurl="";
var count="";
if (Totalbroken===0)
{
  promise="No Broken Promises"
  imageurl=PromiseIcon
  count=""
}
else{
  promise="Broken Promises"
  imageurl=BrokenIcon
  count=Totalbroken
}


    return (
  
      <Box boxShadow={10} style={{backgroundColor:"#273D49BF",height:'37vh'}}>
            <div>
         <CardHeader title={<Typography style={{color:'#FFFFFF80',fontFamily:'Roboto',fontWeight:'bold',fontSize:'1.125rem', textTransform:'capitalize'}}>{customername}</Typography>}/>
       
       <Typography style={{color:'#FFFFFF80',fontFamily:'Roboto',fontSize:'1rem',display:'flex',flexDirection:'row-reverse',marginTop:'-4vh',paddingRight:'3%'}} >{customerid}</Typography>
       </div>
       
        <div className={classes.root}>
      
            <Histogram number={num} Pendingamount={Pendingamount} BName={BName} totalopenamount={totalopenamount}/>
            <Divider orientation="vertical" style={{backgroundColor:'#FFFFFF80',opacity:'10%'}} flexItem />
           <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
           <div>
           <Typography style={{color:'#FFFFFF',fontFamily:'Roboto',fontSize:'2rem',display:'flex',justifyContent:'center'}}>{count}</Typography>
             <img src={imageurl} alt="cardimage" className={classes.cardimage}/>
           </div>
              <div>
               
              
                <Typography style={{color:'#FFFFFF80',fontFamily:'Roboto',fontSize:'1.2rem',padding:'10%'}}>{promise}</Typography>
              
              </div>
           </div>
        </div>
      </Box>


    );
}

