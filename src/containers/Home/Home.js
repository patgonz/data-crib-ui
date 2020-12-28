// import React , {
//   useState
// } from 'react';
import React, { useState } from 'react';
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
import { Pagination } from '../../components/Pagination'
// import { CountryCard } from '../../components/CountryCard';

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
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(10);
  
  const {
    classes,
    data,
    searchDrawer,
    searchBar,
    
  } = props;

/*   const [allCountries, currentCountries, currentPage, totalPages ] = useState('');
  const totalCountries = allCountries.length;

  if (totalCountries === 0) return null; */

 //const headerClass = ['text-dark py-2 pr-4 m-0', currentPage ? 'border-gray border-right' : ''].join(' ').trim();

  console.log(data);

// Get current results
const indexOfLastResult = currentPage * resultsPerPage;
const indexOfFirstResult = indexOfLastResult - resultsPerPage;
const currentResults = data.slice(indexOfFirstResult, indexOfLastResult);

// Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

{/*         <div className="row d-flex flex-row py-5">
          <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <h2 className={headerClass}>
                <strong className="text-secondary">{totalCountries}</strong> Countries
              </h2>
              { currentPage && (
                <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                  Page <span className="font-weight-bold">{ currentPage }</span> / <span className="font-weight-bold">{ totalPages }</span>
                </span>
              ) }
            </div>
            <div className="d-flex flex-row py-4 align-items-center">
              <Pagination totalRecords={totalCountries} pageLimit={18} pageNeighbours={1} onPageChanged={this.onPageChanged} />
            </div>
          </div>
          { currentCountries.map(country => <CountryCard key={country.cca3} country={country} />) }
        </div>
 */}
  {data.length != 0 ? <Typography id='dataSourceTitle' 
                    component='div' 
                    variant='h6'>
                      IP2Proxy Results
        </Typography> : null}
        


        {currentResults.map((item) => (

          <IP2ProxyPane
            data={item}
            key={item.id} />))}

          <Pagination 
            resultsPerPage={resultsPerPage} 
            totalResults={data.length} 
            paginate={paginate} 
            />

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