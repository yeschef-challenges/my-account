import Typography from '@material-ui/core/Typography/Typography';
import React from 'react';


const TabPanel = ({children, value, index, ...other}) => {
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {children}
    </Typography>
  );
};


export default TabPanel;