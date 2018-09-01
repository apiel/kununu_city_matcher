import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from '../about';
import City from '../city';

const App = () => (
  <div>
    <header>
      <Link to="/">City</Link>
      <Link to="/about">About</Link>
    </header>

    <main>
      <Route exact path="/" component={City} />
      <Route exact path="/about" component={About} />
    </main>
  </div>
);

export default App;
