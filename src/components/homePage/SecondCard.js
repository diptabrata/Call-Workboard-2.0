import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import { Typography } from '@material-ui/core';
import Histogram  from './Highchart';


const useStyles = makeStyles(theme => ({
root:{
  display:'flex',
  
},

}));
export default function SecondCard(props) {
  
  const classes = useStyles(); 
  const{data}=props;
  console.log("Second",data);
  let totalopenamount=0;
  let Pendingamount=[];
if (data){
data.forEach(item => totalopenamount=totalopenamount+item.totalCurrentOpenAmount
  )  
for (let i=0;i<5;i++)
{
  let summation=0;
  data.forEach(item=>summation=summation+item.pastDueBucketDocumentAmount[i])
  Pendingamount[i]=summation;
}
  
}
console.log("sum",Pendingamount)

  // const Pendingamount=data?data.pastDueBucketDocumentAmount:[];
  // const BName=data?data.bucketNames:[];
  // const totalopenamount=data?data.totalCurrentOpenAmount:'';

    return (
  
      <Card  style={{backgroundColor:"#273D49BF",height:'37vh'}}>
            <div>
         <CardHeader title={<Typography style={{color:'#FFFFFF80',fontFamily:'Roboto',fontWeight:'bold',fontSize:'1.125rem'}}>Remaining Balance Summary</Typography>}/>
         <Histogram  Pendingamount={Pendingamount} totalopenamount={totalopenamount}/>
       </div>
      </Card>


    );
}
