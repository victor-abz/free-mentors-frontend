import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Link,
  Grid
} from '@material-ui/core';
import backgroundImage from '../assets/mentors.jpg';

import RegisterForm from '../components/Signupform';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(6, 2),
    backgroundImage: `url(${backgroundImage})`,
  },
  card: {
    width: theme.breakpoints.values.md,
    maxWidth: '40%',
    overflow: 'unset',
    display: 'flex',
    position: 'relative',
    '& > *': {
      flexGrow: 1,
      flexBasis: '50%',
      width: '50%'
    }
  },
  content: {
    padding: theme.spacing(3, 4, 3, 4)
  },
  media: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    padding: theme.spacing(3),
    color: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  icon: {
    color: theme.palette.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    position: 'absolute',
    top: -32,
    left: theme.spacing(3),
    height: 64,
    width: 64,
    fontSize: 32
  },
  registerForm: {
    marginTop: theme.spacing(3)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  person: {
    marginTop: theme.spacing(2),
    display: 'flex'
  },
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Register = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
    >
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography
            gutterBottom
            variant="h3"
          >
            Sign up
          </Typography>
          <Typography variant="subtitle2">
            Sign up on the internal platform
          </Typography>
          <RegisterForm className={classes.registerForm} />
          <Divider className={classes.divider} />
          <Link
            align="center"
            color="secondary"
            component={RouterLink}
            to="/auth/login"
            underline="always"
            variant="subtitle2"
          >
            Have an account?
          </Link>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Register;
