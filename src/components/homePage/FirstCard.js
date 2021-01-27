import React, {useEffect} from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import { Typography } from '@material-ui/core';
import Histogram  from './Highchart';
import PromiseIcon from '../../images/Promise.svg';
import Divider from '@material-ui/core/Divider';
import { getData } from '../../apicall/Apicalling';
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
  const [num]=React.useState(nanoid)
  const classes = useStyles(); 

  
const {data}=props;
// console.log("FIRST",data);
const customername=data?data.customerName:'';
const customerid=data?data.customerNumber:'';
const Totalbroken=data?data.totalBrokenPromises:'';
const Pendingamount=data?data.pastDueBucketDocumentAmount:'';
const BName=data?data.bucketNames:'';
const totalopenamount=data?data.totalCurrentOpenAmount:'';


    return (
  
      <Card  style={{backgroundColor:"#273D49BF",height:'37vh'}}>
            <div>
         <CardHeader title={<Typography style={{color:'#FFFFFF80',fontFamily:'Roboto',fontWeight:'bold',fontSize:'1.125rem'}}>{customername}</Typography>}/>
       
       <Typography style={{color:'#FFFFFF80',fontFamily:'Roboto',fontSize:'1rem',display:'flex',flexDirection:'row-reverse',marginTop:'-4vh',paddingRight:'3%'}} >{customerid}</Typography>
       </div>
       
        <div className={classes.root}>
            <Histogram number={num} Pendingamount={Pendingamount} BName={BName} totalopenamount={totalopenamount}/>
           <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
           <div>
             <img src={PromiseIcon} alt="Promise" className={classes.cardimage}/>
           </div>
              <div>
                <Typography style={{color:'#FFFFFF80',fontFamily:'Roboto',fontSize:'1.2rem',padding:'10%'}}>No Broken Promises</Typography>
                
              </div>
           </div>
        </div>
      </Card>


    );
}

