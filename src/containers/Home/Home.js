import React from 'react';
import PropTypes from 'prop-types'

// Material-UI Imports
import SearchBar from "material-ui-search-bar";
import {
  makeStyles,
  IconButton,
  Typography,
  withStyles,
  Tooltip
} from '@material-ui/core';
import clsx from 'clsx';
import FilterListIcon from '@material-ui/icons/Filter';

// Local Imports
import {
  IP2ProxyPane,
  ResponsePaneWrapper
} from '../../components/ResponsePanes';
import { FilterList } from '@material-ui/icons';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '5px',
    width: '100%'
  },
  contentShift: {
    width: `calc(100% - ${theme.spacing(61)}px)`,
    marginLeft: theme.spacing(61),
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));
const isSubmitted = false;

const Home = (props) => {
  const {
    classes,
    data,
    searchDrawer,
    searchBar,
    
  } = props;

  console.log(data);

  return (
    <div className={classes.root}>
      <SearchBar
        value={searchBar.search}
        onChange={(newValue) => searchBar.onChange(newValue)}
        onRequestSearch={searchBar.onSubmit} />
      <div>   
      
        <searchDrawer />
         
        <Tooltip title="Advanced Search" >
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={searchDrawer.onClick}
          edge='start'
          className={clsx(classes.menuButton, classes.hide)}>
          {/* <MenuIcon /> */}
          <FilterList />
        </IconButton>
        </Tooltip>
  {data.length != 0 ? <Typography id='dataSourceTitle' 
                    component='div' 
                    variant='h6'>
                      IP2Proxy Results
        </Typography> : null}
        
        {data.map((item) => (

          <IP2ProxyPane
            data={item}
            key={item.id} />))}
      </div>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.array.isRequired,
  searchDrawer: PropTypes.shape({
    onClick: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
  }).isRequired,
  searchBar: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    search: PropTypes.string,
  }).isRequired,
}

export default withStyles(styles)(Home);