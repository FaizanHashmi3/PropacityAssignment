

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Films from './components/Films';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/films" component={Films} />
          {/* Add routes for other categories */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
