import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import ScopeList from './scopes/ScopeList';
import ScopeShow from './scopes/ScopeShow';
import ScopeCreate from './scopes/ScopeCreate';
import ScopeEdit from './scopes/ScopeEdit';
import ScopeDelete from './scopes/ScopeDelete'
import Header from './Header';
import history from '../history';


const App = () => {
  return (
    <div className="ui container">
      <Router history = {history}>
        <div>
        <Header />
        <Switch>
          <Route path="/" exact component={ScopeList} />
          <Route path="/" exact component={ScopeShow} />
          <Route path="/" exact component={ScopeCreate} />
          <Route path="/" exact component={ScopeEdit} />
          <Route path="/" exact component={ScopeDelete} />
        </Switch>
        </div>
      </Router>
    </div>
)}

export default App;
