import React, {useState} from 'react';
// import IP2ProxyPane from './IP2ProxyPane';

// Material-UI Imports
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  withStyles
} from '@material-ui/core';
import moment from 'moment';
import SearchDrawerDatePicker from './SearchDrawerDatePicker';
import { SearchBar } from 'material-ui-search-bar';
import { SearchDrawer } from './SearchDrawer';

const styles = makeStyles({
  root: {}
});
// function handleClick(e) {
//   e.preventDefault();
//   console.log("test " + e);
//   //SearchBar.onChange = null; //handlesSearch;
//   //SearchBar.onSubmit = null; //getIP2Proxy;
//   //SearchBar.search = null; //search;
//   //searchDrawer.onClick;
// }



const SearchDrawerList = (props) => {
  const { classes } = props;

    const onApplyClick = (e) => {
      props.setDates({
        start: props.dates.start,
        end: props.dates.end
      });
      props.toggleDrawer();
    }

  const onClearClick = (e) => {
    props.setDates({
      start: null,
      end: null
    });
    props.toggleDrawer();
  }

    return (
    <List className={classes.root}>
      <ListItem>
        <SearchDrawerDatePicker dates={props.dates} applyCallback={props.setDates} />
      </ListItem>
      <Divider />
      <ListItem
        button
        onClick={onApplyClick}
      >
        <ListItemText
          variant="contained"
          color="default">
          Apply
        </ListItemText>
      </ListItem>
      <ListItem
          button
          onClick={onClearClick}
      >
        <ListItemText
            variant="contained"
            color="default">
          Clear
        </ListItemText>
      </ListItem>
    </List>
  );
}

export default withStyles(styles)(SearchDrawerList);