import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Results from './../components/mentorsList';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  header: {
    marginBottom: theme.spacing(3)
  },
  filter: {
    marginTop: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(6)
  }
}));

const MentorList = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      title="Mentor List"
    >
      <Results className={classes.results} />
    </Grid>
  );
};

export default MentorList;
