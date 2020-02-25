import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  TextField
} from '@material-ui/core';

import useRouter from '../utils/useRouter';
import { signUp } from '../redux/actions/signupAction'

const schema = {
  firstName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  lastName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 64
    }
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128
    }
  },

  address: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 30
    }
  },
  bio: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 144
    }
  },
  occupation: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 30
    }
  },
  expertise: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 50
    }
  },
};

const useStyles = makeStyles(theme => ({
  root: {},
  fields: {
    margin: theme.spacing(-1),
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      flexGrow: 1,
      margin: theme.spacing(1)
    }
  },
  submitButton: {
    marginTop: theme.spacing(2),
    width: '100%'
  }
}));

const RegisterForm = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();

  const status = useSelector(state=> state.signUp)

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleSubmit = async event => {
    console.log('wooooooo')
    event.preventDefault();
    console.log('called')
    dispatch(signUp(formState.values));
  };

  useEffect(() => {
    if(status.isAuthenticated === 'true' && status.token){
      router.history.push('/login');
    }
  }, [status]);

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <form
      {...rest}
      className={clsx(classes.root, className)}
      onSubmit={handleSubmit}
    >
      <div className={classes.fields}>
        <TextField
          error={hasError('firstName')}
          helperText={
            hasError('firstName') ? formState.errors.firstName[0] : null
          }
          label="First name"
          name="firstName"
          onChange={handleChange}
          size="small"
          value={formState.values.firstName || ''}
          variant="outlined"
        />
        <TextField
          error={hasError('lastName')}
          helperText={
            hasError('lastName') ? formState.errors.lastName[0] : null
          }
          label="Last name"
          name="lastName"
          onChange={handleChange}
          size="small"
          value={formState.values.lastName || ''}
          variant="outlined"
        />
        <TextField
          error={hasError('email')}
          fullWidth
          helperText={hasError('email') ? formState.errors.email[0] : null}
          label="Email address"
          name="email"
          onChange={handleChange}
          size="small"
          type="email"
          value={formState.values.email || ''}
          variant="outlined"
        />
        <TextField
          error={hasError('password')}
          fullWidth
          helperText={
            hasError('password') ? formState.errors.password[0] : null
          }
          label="Password"
          name="password"
          onChange={handleChange}
          size="small"
          type="password"
          value={formState.values.password || ''}
          variant="outlined"
        />
        <TextField
          error={hasError('address')}
          fullWidth
          helperText={
            hasError('address') ? formState.errors.address[0] : null
          }
          label="Address"
          name="address"
          onChange={handleChange}
          size="small"
          value={formState.values.address || ''}
          variant="outlined"
        />
        <TextField
          error={hasError('bio')}
          fullWidth
          helperText={
            hasError('bio') ? formState.errors.bio[0] : null
          }
          label="bio"
          name="bio"
          onChange={handleChange}
          size="small"
          value={formState.values.bio || ''}
          variant="outlined"
        />
        <TextField
          error={hasError('occupation')}
          fullWidth
          helperText={
            hasError('occupation') ? formState.errors.occupation[0] : null
          }
          label="occupation"
          name="occupation"
          onChange={handleChange}
          size="small"
          value={formState.values.occupation || ''}
          variant="outlined"
        />
        <TextField
          error={hasError('expertise')}
          fullWidth
          helperText={
            hasError('expertise') ? formState.errors.expertise[0] : null
          }
          label="expertise"
          name="expertise"
          onChange={handleChange}
          size="small"
          value={formState.values.expertise || ''}
          variant="outlined"
        />
      </div>
      <Button
        className={classes.submitButton}
        color="secondary"
        disabled={!formState.isValid}
        size="large"
        type="submit"
        variant="contained"
      >
        Create account
      </Button>
    </form>
  );
};

RegisterForm.propTypes = {
  className: PropTypes.string
};

export default RegisterForm;
