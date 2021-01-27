import React, { useEffect } from 'react';
import Highcharts from 'highcharts';

const Histogram = (props) => {
  var Pendingamount=props.Pendingamount && props.Pendingamount;
  const BName=props.BName;
  const totalopenamount=props.totalopenamount;

  Pendingamount=Pendingamount.slice(0,(Pendingamount.length-1));
   console.log(props);

  // const ContainerName='container'+props.num;
  Highcharts.setOptions({
    colors: ['#5DAAE0'],
    
});
  const renderChart = () => {
    const chart = Highcharts.chart(props.number, {
        chart: {
            type: "column",
            backgroundColor:"transparent"
        },
        legend:{
          enabled:false
        },
        yAxis:{
        gridLineWidth:0,
        },
        xAxis:{
          categories:['Current Due',...BName],
          padding:0,
          margin:0,
        },
        labels:{autoRotation:[0],
        style:{
          fontSize:'0.5rem',
          color:'#FFFFFFA6',
          textOverflow:'none',
          textOutline:false,
          textShadow:false,

        },
      },
        plotOptions: {
          series: {
              animation: {
                  duration: 800
              }
          }
      },
        credits:{
        enabled:false 
        },
        title: {
          text: undefined
      },
     
        series: [{
          data: [totalopenamount,...Pendingamount],
        }],
  
        
    
    });
    return chart;
};

  useEffect(()=> {
        const call=renderChart();
  });
  return(
    
    <div id={props.number} style={{height:'inherit',width:'inherit',}}>
      
    </div>
  )
        

}
export default Histogram;
