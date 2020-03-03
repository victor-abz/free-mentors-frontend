import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
  colors
} from '@material-ui/core';

import Label from './Label';

const useStyles = makeStyles(theme => ({
  root: {},
  header: {
    paddingBottom: 0
  },
  content: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0
    }
  },
  description: {
    padding: theme.spacing(2, 3, 1, 3)
  },
  tags: {
    padding: theme.spacing(0, 3, 1, 3),
    '& > * + *': {
      marginLeft: theme.spacing(1)
    }
  },
  learnMoreButton: {
    marginLeft: theme.spacing(2)
  },
  likedButton: {
    color: colors.red[600]
  },
  shareButton: {
    marginLeft: theme.spacing(1)
  },
  details: {
    padding: theme.spacing(1, 3)
  },
  h5: {
    fontWeight: 500,
    fontSize: '16px',
    letterSpacing: '-0.05px',
    lineHeight: '20px'
  },
  body2: {
    fontSize: '12px',
    letterSpacing: '-0.04px',
    lineHeight: '18px'
  },
}));

const MentorCard = props => {
  const { mentor, className, ...rest } = props;

  const name = `${mentor.firstname} ${mentor.lastname}`

  const getInitials = (name = '') =>
    name
      .replace(/\s+/, ' ')
      .split(' ')
      .slice(0, 2)
      .map(v => v && v[0].toUpperCase())
      .join('');


  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        avatar={
          <Avatar
            alt="Mentor"
            src={mentor.avatar}
          >
            {getInitials(name)}
          </Avatar>
        }
        className={classes.header}
        disableTypography
        title={name}
      />
      <CardContent className={classes.content}>
        <div className={classes.description}>
          <Typography
            colo="textSecondary"
            variant="subtitle2"
          >
            {mentor.bio}
          </Typography>
        </div>
        <div className={classes.tags}>
          {
            <Label >
              {mentor.expertise}
            </Label>
          }
        </div>
        <Divider />
        <div className={classes.details}>
          <Grid
            alignItems="center"
            container
            justify="space-between"
            spacing={3}
          >
            <Grid item>
              <Typography className={classes.h5}>{mentor.address}</Typography>
              <Typography className={classes.body2}>address</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.h5}>{mentor.occupation}</Typography>
              <Typography className={classes.body2}>Occupation</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.h5}>{mentor.email}</Typography>
              <Typography className={classes.body2}>Email</Typography>
            </Grid>
            <Grid item>
              <Button
                className={classes.learnMoreButton}
                component={RouterLink}
                size="small"
                to="#"
              >
                Request Session
              </Button>
            </Grid>
          </Grid>
        </div>
      </CardContent>
    </Card>
  );
};

MentorCard.propTypes = {
  className: PropTypes.string,
  mentor: PropTypes.object.isRequired
};

export default MentorCard;
