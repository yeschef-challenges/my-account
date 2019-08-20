import React from 'react';
import { Tabs, Tab, withStyles } from '@material-ui/core';

export const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#FF007F',
  },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

export const StyledTab = withStyles({
  root: {
    flex: 1,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    '&:focus': {
      opacity: 1,
    },
  },
  wrapper: {
    height: 20,
    color: '#FFFFFF',
    fontFamily: 'Open Sans',
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 17,
    textAlign: 'center',
  },
})(props => <Tab disableRipple {...props} />);
