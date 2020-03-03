/* eslint-disable react/no-set-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Typography
} from '@material-ui/core';

import http from '../utils/http';
import MentorCard from './MentorCard';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const pageStyles = makeStyles(theme => ({
  root: {},
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(2)
  },
  title: {
    position: 'relative',
    '&:after': {
      position: 'absolute',
      bottom: -8,
      left: 0,
      content: '" "',
      height: 3,
      width: 48,
      backgroundColor: theme.palette.primary.main
    }
  }
}));

class Mentors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mentors: []
    };
  }


  componentDidMount() {
    const fetchMentors = () => {
      http.get('API/v2/mentors').then(response => {
        this.setState({mentors: response.data.data});
      });
    };
        
    fetchMentors();
  }

  render() {
    const { classes } = this.props;
    return (
      <div
        className={clsx(classes.root)}
      >
        <div className={classes.header}>
          <Typography
            className={classes.title}
            variant="h5"
          >
          Showing {this.state.mentors.length} mentors
          </Typography>
        </div>
        <Grid
          container
          spacing={3}
        >
          {this.state.mentors.map(mentor => (
            <Grid
              item
              key={mentor.userid}
              md={4}
              sm={6}
              xs={12}
            >
              <MentorCard mentor={mentor} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

Mentors.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object
};

export const mapStateToProps = state => {
  return {
    result: state.auth.user,
  };
};
const connectedLoginForm = connect(mapStateToProps, {})(withStyles(pageStyles)(Mentors));

export default connectedLoginForm;
