import React, { useState } from 'react';
import './app.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Countdown from './components/Countdown.js';
import Counter from './components/Counter.js';
import HighCharts from './components/HighCharts';
import EventObject from './components/EventObject';
import PlayRxjs from './components/PlayRxjs';
import TestRxjs from './components/TestRxjs';
import CounterWithNameAndSideEffect from './components/CounterWithNameAndSideEffect';
import HookApi from './components/HookApi';
import TestMomentjs from './components/TestMomentjs';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app__header">
          <span role="img" aria-label="christmastree">🎄</span>
            ...React Rocks...
          <span role="img" aria-label="santa">🎅🏽</span>
        </header>
        <div className="app__article cf">
          <div className="app__nav">
            <ul>
              <li>
                <Link to="/">
                <span role="img" aria-label="mushroom">🍄</span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/counter">
                  Counter
                </Link>
              </li>
	            <li>
		            <Link to="/countdown">
			            Countdown
		            </Link>
	            </li>
	            <li>
		            <Link to="/highcharts">
			            HighCharts
		            </Link>
	            </li>
	            <li>
		            <Link to="/eventobject">
			            EventObject
		            </Link>
	            </li>
	            <li>
		            <Link to="/playrxjs">
			            PlayRxjs
		            </Link>
	            </li>
	            <li>
		            <Link to="/testrxjs">
			            TestRxjs
		            </Link>
	            </li>
	            <li>
		            <Link to="/testmomentjs">
			            TestMomentJs
		            </Link>
	            </li>
	            <li>
		            <Link to="/CounterWithNameAndSideEffect">
			            CounterWithNameAndSideEffect
		            </Link>
	            </li>
	            <li>
		            <Link to="/HookApi">
			            HookApi
		            </Link>
	            </li>
            </ul>
          </div>
          <div className="app__content">
            <Switch>
	            <Route path="/testmomentjs">
		            <TestMomentjs />
	            </Route>
	            <Route path="/HookApi">
		            <HookApi />
	            </Route>
	            <Route path="/CounterWithNameAndSideEffect">
		            <CounterWithNameAndSideEffect />
	            </Route>
	            <Route path="/countdown">
		            <Countdown />
	            </Route>
              <Route path="/counter">
                <Counter />
              </Route>
	            <Route path="/highcharts">
		            <HighCharts />
	            </Route>
	            <Route path="/eventobject">
		            <EventObject />
	            </Route>
	            <Route path="/playrxjs">
		            <PlayRxjs />
	            </Route>
	            <Route path="/testrxjs">
		            <TestRxjs />
	            </Route>
              <Route path="/">
                <Home />
              </Route>
          </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}



function Home() {
  return (<>
    <h2>Welcome to my React Rocks project.</h2>
    <div>It's all about examples built with React.</div>
  </>);

}
export default App;
