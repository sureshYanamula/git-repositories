import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

//Material Ui Inline Styling
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    backgroundColor: 'green',
    marginLeft: '1rem',
    '&:hover': {
      backgroundColor: 'green',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
    },
  },
}));
const SearchAppBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  let history = useHistory();

  // Getting the text value from the redux store
  const { search } = useSelector((state) => ({ ...state }));
  const { text } = search;

  // Takes the user to the Search Component and appends the text user typed in to the url
  const handleSearch = () => {
    history.push(`/search?query=${text}`);
  };

  // Whatever user types in the search field it is forworded to the redux store using dispatch method
  const handleChange = (e) => {
    dispatch({
      type: 'SEARCH_QUERY',
      payload: { text: e.target.value },
    });
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleChange}
            />
          </div>
          <Button
            className={classes.button}
            variant='contained'
            color='primary'
            size='small'
            onClick={handleSearch}
          >
            Search
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default SearchAppBar;
