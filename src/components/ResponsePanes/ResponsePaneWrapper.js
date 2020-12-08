import React, { Component} from 'react';

// Material-UI Imports
import {
  makeStyles,
  Typography,
  withStyles
} from '@material-ui/core';

const styles = makeStyles({
  root: {}
});

const ResponsePaneWrapper = (props) => {
  const { component, data, label } = props;

  return (
    <div>
      <Typography component='div' variant='h6'>
        {label}
      </Typography>
      {data.map((item) => (
        <Component 
          type={component}
          data={item}
          key={item.id} />))}
    </div>
  )
}

export default withStyles(styles)(ResponsePaneWrapper);