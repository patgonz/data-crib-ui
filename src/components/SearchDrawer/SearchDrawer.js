import React, {useState} from 'react';
import PropTypes from 'prop-types';

// Material-UI Imports
import {
  Divider,
  Drawer,
  IconButton,
  makeStyles,
  useTheme,
  Typography,
  withStyles, Tooltip
} from '@material-ui/core';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// Local Imports
import SearchDrawerList from './SearchDrawerList';
import App from '../../App';

const styles = makeStyles((theme) => ({
  root: {
    width: theme.spacing(30),
    flexShrink: 0,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -theme.spacing(30),
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  drawerHeader: {
    display: 'flex',
    padding: theme.spacing(0, 1),
    flexDirection: 'column',

    // necessary for content to be below app bar
    // ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  drawerHeaderInline: {
    display: 'inline',
    margin: '0 auto',
  },
  drawerPaper: {
    width: theme.spacing(30),
  },
  hide: {
    display: 'none',
  },
}));

const SearchDrawer = (props) => {
  const { classes, searchDrawer } = props;
  const theme = useTheme();

  return (
    <Drawer
      anchor='top'
      classes={{
        paper: classes.drawerPaper,
      }}
      className={classes.root}
      open={searchDrawer.open}
      variants='persistent'>
      <div className={classes.drawerHeader}>
        <IconButton
          className={classes.drawerHeaderInline}
          onClick={searchDrawer.onClick}>
          {theme.direction === 'ltr' ? <KeyboardArrowUp /> : <KeyboardArrowUp />}
        </IconButton>
        <Typography
          className={classes.drawerHeaderInline}
          component='span'
          variant='h6'
          nowrap>
          Advanced Search
          </Typography>
      </div>
      <Divider />
      <SearchDrawerList dates={props.dates} setDates={props.setDates} toggleDrawer={searchDrawer.onClick} />

      <Divider />
    </Drawer>
  );
}

SearchDrawer.propTypes = {
  searchDrawer: PropTypes.shape({
    onClick: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
  }).isRequired,
}

export default withStyles(styles)(SearchDrawer);