import React from 'react';
import './app.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


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
              </li>
            </ul>
          </div>
          <div className="app__content">
            <Switch>
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
    <div>It's all about examples write in React.</div>
  </>);

}
export default App;
