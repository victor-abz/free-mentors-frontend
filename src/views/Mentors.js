import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import useRouter from '../utils/useRouter';

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

  const router = useRouter();

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      const token  = localStorage.getItem('token')
      console.log(token)
      if(!token){
        router.history.push('/login');
      }
    }

    return () => {
      mounted = false;
    };
  }, []);

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
