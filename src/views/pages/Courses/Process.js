import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Container, Grid, Typography, makeStyles } from '@material-ui/core';
import ProcessSteppers from './ProcessSteppers';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(180deg, #2A185A 0%, #000000 100%)',
    padding: theme.spacing(14, 10, 10),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(14, 0, 10)
    },
    color: '#000000'
  }
}));

function Process({ benefits, className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Typography
          style={{ color: '#ffffff' }}
          variant="h2"
          align="center"
          gutterBottom
        >
          Offering 70% Scholarship On this Batch
        </Typography>

        <Typography
          style={{ marginTop: '32px', color: '#ffffff' }}
          variant="h4"
          align="center"
          gutterBottom
        >
          Application Process To Get Shortlisted
        </Typography>
        <Grid container component="dl" style={{ padding: '20px 0px 20px' }}>
          <ProcessSteppers />
        </Grid>
      </Container>
    </div>
  );
}

Process.propTypes = {
  className: PropTypes.string
};

export default Process;
