import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import ScopeCreate from './scopes/ScopeCreate';
import ScopeEdit from './scopes/ScopeEdit';
import ScopeDelete from './scopes/ScopeDelete';
import ScopeList from './scopes/ScopeList';
import ScopeShow from './scopes/ScopeShow';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={ScopeList} />
            <Route path="/scopes/new" exact component={ScopeCreate} />
            <Route path="/scopes/edit/:id" exact component={ScopeEdit} />
            <Route path="/scopes/delete/:id" exact component={ScopeDelete} />
            <Route path="/scopes/:id" exact component={ScopeShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;