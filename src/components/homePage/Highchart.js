import React, { useEffect } from 'react';
import Highcharts from 'highcharts';

const Histogram = (props) => {
  
  var Pendingamount=props.Pendingamount && props.Pendingamount;

  const BName=props.BName?props.BName:[];
  
  const totalopenamount=props.totalopenamount&&props.totalopenamount;

  Pendingamount=Pendingamount.slice(0,(Pendingamount.length-1));
  
  const totalamount=Pendingamount.reduce(function(a,b){return a+b;},0);
  console.log("total",totalamount);
  
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
          labels:{
            enabled:false,
          },
          title:null,
          
        },
        loading: {
          hideDuration: 500,
          showDuration: 1000
      },
        xAxis:{
          fontFamily:'Roboto',
          categories:['Current Due',...BName],
          padding:0,
          margin:0,
          lineWidth:'1',
          lineColor:'#58687E',
         labels:{
          autoRotation:[0],
       
        style:{
          fontSize:'0.5rem',
          textColor:'#FFFFFFA6',
          color:'#FFFFFFA6',
          textOverflow:'none',
          textOutline:false,
          textShadow:false,
          fontFamily:'Roboto',
        },
        },
    },
        plotOptions: {
          series: {
              borderColor: '',
              animation: {
                  duration: 800
              },
              
          },
          column:{
            
            dataLabels:{
              style:{
                color:"#FFFFFF80",
                fontFamily:'Roboto',
                textOutline: '',
              },
              enabled:true,
              overflow:'allow',
              crop:false,
              
              formatter:function(){
                return `               
                ${((Math.ceil(this.y)/totalamount)*100).toFixed(1)}%
              <br/>
              $${Math.ceil((this.y)/1000)}M
              `;
              },
                
              },
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
        renderChart();
  });
  return(
    
    <div id={props.number} style={{height:'30vh',width:'70vh',}}>
      
    </div>
  )
        

}
export default Histogram;
