import React, { Fragment } from 'react';
import './app.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Emoji from 'a11y-react-emoji';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app__header">
          <Emoji symbol="🎄" />
            ...React Rocks...
          <Emoji symbol="🎅🏽" />
        </header>
        <div className="app__article cf">
          <div className="app__nav">
            <ul>
              <li>
                <Link to="/">
                <Emoji symbol="🍄" />
                  Home
                </Link>
              </li>
              <li>
                <Emoji symbol="🍄" />
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
