import React,{useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import SearchAppBar from './components/SearchAppBar';
import Bubbling from './components/Bubbling';
import ThrottlingOne from './components/ThrottlingOne';
import PropDrilling from './components/PropDrilling';

const App = () => {

  
  return (
    <div style={{textAlign:"center"}}>
      <SearchAppBar />
      {/* <h1>{count}</h1> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/bubbling' component={Bubbling} />
        <Route exact path='/throttling' component={ThrottlingOne} />
        <Route exact path='/propdrilling' component={PropDrilling} />
      </Switch>
    </div>
  );
};

export default App;
