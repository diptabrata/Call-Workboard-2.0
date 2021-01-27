import React, { Component } from "react";
import "../../App.css";
import withWidth from "@material-ui/core/withWidth";
import layoutConfig from "../../layout-config/layoutConfig.json";
import ComponentGetter from "../../utils/component-getters/ComponentGetter";
import FlexGrid from "./FlexGrid";

class Render extends Component {
constructor(props){
  super(props)
  this.customerIndex=-1;

}
  getComponent = componentID => {
    if (this.props.data!==null && componentID==="customer"){
    this.customerIndex+=1;
    if (this.customerIndex >=5){
      this.customerIndex%=5;
    }
    
    return <ComponentGetter componentID={componentID} data={this.props.data && this.props.data[this.customerIndex]}/>;
    }
    else
    {
      // console.log("Rendering",componentID);
      return <ComponentGetter componentID={componentID} data={this.props.data ? this.props.data:""}/>;
    }
  };

  render() {
    const { width } = this.props;
    const layoutConfigView = layoutConfig["0"][width];
    
    
    
      return (

        <FlexGrid
          layoutConfiguration={layoutConfigView}
          getComponent={this.getComponent}
        />
      );
    
   
  }

}

export default withWidth()(Render);

// export default  function Grids(props) {
  
//   return (
//       <div>Hello </div>
    
//       );
//     }