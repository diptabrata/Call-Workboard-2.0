import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MainContent from './MainContent';
import Sidebar from './Sidebar';
 
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    padding:0,
    position:'fixed',
  },
}));
 
function Home() {
  const classes = useStyles();
 
  return (
    <div className={classes.root}>    
     {/* Sidebar */}
     <Sidebar />
     {/* Header,Tabs,Charts,Footer */}
     <MainContent />  
    
    </div>
  );
}
export default Home