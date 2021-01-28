import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import { Typography } from '@material-ui/core';
import Histogram  from './Highchart';
import Box from '@material-ui/core/Box';
import { nanoid } from 'nanoid';
const useStyles = makeStyles(theme => ({
root:{
  display:'flex',
  
},

}));
export default function SecondCard(props) {
  const [num]=React.useState(nanoid);
  const classes = useStyles(); 
  const{data}=props;
  console.log("Second",data);
  let totalopenamount=0;
  let Pendingamount=[];
  let BName=[];
if (data){
   
data.forEach(item => totalopenamount=totalopenamount+item.totalCurrentOpenAmount
  )  
for (let i=0;i<6;i++)
{
  let summation=0;
  data.forEach(item=>summation=summation+item.pastDueBucketDocumentAmount[i])
  Pendingamount[i]=summation;
  
}
  
}
console.log("OPEN",totalopenamount)
console.log("sum",Pendingamount)
BName=data[0].bucketNames;
  // const Pendingamount=data?data.pastDueBucketDocumentAmount:[];
  
  // const totalopenamount=data?data.totalCurrentOpenAmount:'';
console.log("BNAME",BName)
    return (
  
      <Box boxShadow={10}  style={{backgroundColor:"#273D49BF",height:'37vh'}}>
            <div >
         <CardHeader title={<Typography style={{color:'#FFFFFF80',fontFamily:'Roboto',fontWeight:'bold',fontSize:'1.125rem'}}>Remaining Balance Summary</Typography>}/>
         </div>
        <div style={{display:'flex'}}>
         <Histogram number={num}  Pendingamount={Pendingamount} BName={BName} totalopenamount={totalopenamount}/>
       </div>
      </Box>


    );
}
