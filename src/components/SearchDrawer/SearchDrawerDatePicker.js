import React, {useEffect, useState} from 'react';

// Material-UI Imports
import {
  makeStyles,
  withStyles
} from '@material-ui/core';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Today } from '@material-ui/icons';

const styles = makeStyles({
  root:  {
    backgroundColor: 'purple',
    border: 0,
    color: 'red',
    
  },
});

const thirtyDaysAgo = new Date(Date.now());
thirtyDaysAgo.setDate(thirtyDaysAgo.getDate()-30);

const SearchDrawerDatePicker = (props) => {
  const [startDate, setStartDate] = useState(props.dates.start ? props.dates.start : thirtyDaysAgo);
  const [endDate, setEndDate] = useState(props.dates.end ? props.dates.end : new Date(Date.now()));

  useEffect(() => { props.applyCallback({ start: startDate, end: endDate } ) }, [startDate, endDate])

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="start-date"
        label="Start Date"
        value={props.dates.start}
        onChange={setStartDate}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }} />
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="end-date"
        label="End Date"
        value={props.dates.end}
        onChange={setEndDate}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }} />
    </MuiPickersUtilsProvider>
  );
}

export default withStyles(styles)(SearchDrawerDatePicker);