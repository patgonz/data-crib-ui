import React, {
  useCallback,
  useRef,
  useState
} from 'react';
import axios from 'axios';
import moment from 'moment';

// Material-UI Imports
// import { makeStyles } from '@material-ui/core/styles';
import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core';

// Local Imports
import { Home } from './containers/Home';
import {
  Header,
  SearchDrawer
} from './components';

const theme = createMuiTheme({
  palette: {
    type: 'light',
  }
});

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   elementStyle: {
//     border: 'solid',
//     borderRadius: '10px',
//     position: 'relative',
//     left: '10vh',
//     height: '3vh',
//     width: '20vh',
//     marginTop: '5vh',
//     marginBottom: '10vh'
//   },
// }));

const App = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  const [search, setSearch] = useState(undefined);
  const handleSearch = useCallback((value) => {
    console.log(value);
    setSearch(value);
  }, [setSearch]);

  const [data, setData] = useState([]);
  const [dates, setDates] = useState({});
  const cancelToken = useRef(axios.CancelToken.source());
  const getIP2Proxy = async () => {
    let queryParams = 'ip2proxy?&_limit=50&_page=1';
    if (search) {
      queryParams += '&ip_address=' + search;
    }

    if (dates.start) {
      queryParams += '&writetime_gte=' + moment(dates.start).format('YYYY-MM-DD');
    }

    if (dates.end) {
      queryParams += '&writetime_lte=' + moment(dates.end).format('YYYY-MM-DD');
    }

    console.log(queryParams);

    try {
      const response = await axios.get(
        `http://${process.env.REACT_APP_BACKEND_SERVER}:${process.env.REACT_APP_BACKEND_SERVER_PORT}/${queryParams}`,
        { cancelToken: cancelToken.current.token }
      );

      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getFirehol = async () => {
    let queryParams = 'firehol?ip_address=' + search + '&_limit=50&_page=1';
    try {
      const response = await axios.get(`http://${process.env.REACT_APP_BACKEND_SERVER}:${process.env.REACT_APP_BACKEND_SERVER_PORT}/${queryParams}`,
        { cancelToken: cancelToken.current.token });
      const request1 = null; // await axios.get(`http://localhost:3000/${queryParams2}`, { cancelToken: cancelToken.current.token });
      const response1 = null; /* await axios
                        .all([request1])
                        .then(axios.spread((...responses) => {
                          const response0 = responses[0];
                          const response1 = responses[1];
                          setData(response1.data);
                          //setData(response1.data);
                          })); */

      //setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  let searchBar = {
    onChange: handleSearch,
    onSubmit: (process.env.NODE_ENV == 'development' ? getIP2Proxy : () => null),
    search: search,
  };
  let searchDrawer = {
    onClick: toggleDrawer,
    open: open,
  };

  return (
    <ThemeProvider theme={theme}>
      <SearchDrawer searchDrawer={searchDrawer} dates={dates} setDates={setDates} />
      <Header appName='Data CRIB' />
      <h2>Welcome to Amazon ECS version</h2>
      <Home data={data} searchBar={searchBar} searchDrawer={searchDrawer} />
    </ThemeProvider>
  )
}

//export default DrawerOpen;
export default App;