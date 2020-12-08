import React from 'react';
import PropTypes from 'prop-types';

// Material-UI Imports
import clsx from 'clsx';
import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  withStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${theme.spacing(61)}px)`,
    marginLeft: theme.spacing(61),
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: 'none',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: theme.mixins.toolbar,
}))

const Header = (props) => {
  const { appName, classes, searchDrawer } = props;

  return (
    <AppBar
      position="static"
      className={clsx(classes.root)}>
      <Toolbar className={classes.toolbar}>
        {/* <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={searchDrawer.onClick}
          edge='start'
          className={clsx(classes.menuButton, classes.hide)}>
          <MenuIcon />
        </IconButton> */}
        <Typography variant='h4' nowrap>
          {appName}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  appName: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  // searchDrawer: PropTypes.shape({
  //   onClick: PropTypes.func.isRequired,
  //   open: PropTypes.bool.isRequired,
  // }).isRequired,
};

export default withStyles(styles)(Header);