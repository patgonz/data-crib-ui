import React from 'react';

// Material-UI Imports
import {
  makeStyles,
  withStyles
} from '@material-ui/core';

const styles = makeStyles({
  root: {},
  result: {},
});

const FireholPane = (props) => {
  const { classes, data, table } = props;

  return (
    <div className={classes.root}>
      <div key={data.id} className={classes.result}>
        <div>{data.organization}</div>
        <div>{data.country}</div>
        <div>{data.cidr}</div>
        <div>{data.writetime}</div>
        <div>&nbsp;</div>
      </div>
    </div>
  );
}

export default withStyles(styles)(FireholPane);
