import React, { Component } from 'react';
import { Link, Route, Switch } from "react-router-dom";

import About from './components/About';
import Feedback from './components/Feedback';
import Platform from './components/Platform';
import CompaniesContainer from './containers/CompaniesContainer';
import UsersContainer from './containers/UsersContainer';
import './App.css';


// Comments are good

const Home = () => (
  <div className="App">
    <h1>Welcome to Our Consortia of Resources</h1>
    <h3 className="tagline">
      Benefit from shared resources, secure transactions and faster, more impactful processes!
    </h3>
    <div className="actions">
      <div className="options">
        <Link
          to={{
            pathname: "/companies"
          }}
        >
          <span onClick={() => {}} className="button button--blue">View & Add Companies</span>
        </Link>
      </div>
      <div className="options">
        <Link
          to={{
            pathname: "/users"
          }}
        >
          <span onClick={() => {}} className="button button--blue">Our Users</span>
        </Link>
      </div>
      <div className="options">
        <Link
          to={{
            pathname: "/platform"
          }}
        >
          <span onClick={() => {}} className="button button--blue">Our Platform</span>
        </Link>
      </div>
      <div className="options">
        <Link
          to={{
            pathname: "/about"
          }}
        >
          <span onClick={() => {}} className="button button--blue">About Consortia</span>
        </Link>
      </div>
    </div>
    <div className="reviews">
      <h2>What people are saying about our Consortia</h2>
      <Feedback />
    </div>
    {/* <h4 className="tagline--minor">Join to get: a common grid for robust and smooth integrations, component and API sharing/collaboration, and a trusted environment by others like you!</h4>  */}
  </div>
)

const App = props => (
   <Switch>
      <Route exact path="/" component={Home} />
      <Route
        path="/companies"
        render={(props) => <CompaniesContainer {...props} />}
      />
      <Route
        path="/users"
        render={() => <UsersContainer {...props} />}
      />
      <Route
        path="/platform"
        render={() => <Platform {...props} />}
      />
      <Route
        path="/about"
        render={() => <About {...props} />}
      />
    </Switch>
);

export default App;
