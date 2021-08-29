import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import SearchAppBar from './components/SearchAppBar';

const App = () => {
  return (
    <>
      <SearchAppBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/search' component={Search} />
      </Switch>
    </>
  );
};

export default App;
