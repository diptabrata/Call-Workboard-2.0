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

  if ()

  const Pendingamount=data?data.pastDueBucketDocumentAmount:[];
  const BName=data?data.bucketNames:[];
  const totalopenamount=data?data.totalCurrentOpenAmount:'';

    return (
  
      <Card  style={{backgroundColor:"#273D49BF",height:'37vh'}}>
            <div>
         <CardHeader title={<Typography style={{color:'#FFFFFF80',fontFamily:'Roboto',fontWeight:'bold',fontSize:'1.125rem'}}>Remaining Balance Summary</Typography>}/>
       
       </div>
      </Card>


    );
}
