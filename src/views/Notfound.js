import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  }
}));

const NotFound = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      Page not found
    </div>
  );
};

export default NotFound;
