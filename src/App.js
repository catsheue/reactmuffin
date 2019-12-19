import React, { Fragment, useState } from 'react';
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
                <Link to="/counter">
                  Counter
                </Link>
              </li>
            </ul>
          </div>
          <div className="app__content">
            <Switch>

              <Route path="/counter">
                <Counter />
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
function Counter() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [toggle, clickToggle] = useState(true);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>It is {toggle.toString()} that they have no sense of shame. </p>
      <button onClick={() => clickToggle(!toggle)}>
        Click me
      </button>
    </div>
  );
}
function Home() {
  return (<>
    <h2>Welcome to my React Rocks project.</h2>
    <div>It's all about examples write in React.</div>
  </>);

}
export default App;
