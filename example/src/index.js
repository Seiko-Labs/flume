import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import TestEditor from './TestRoutes/TestEditor';
import './index.css';
import 'react-perfect-scrollbar/dist/css/styles.min.css';

ReactDOM.render(
  <Router>
    <Route exact path="/" render={() => <App />} />
    <Switch>
      {/* <Route */}
      {/*  exact */}
      {/*  path="/records" */}
      {/*  render={() => ( */}
      {/*    <React.Fragment> */}
      {/*      <FormStyles /> */}
      {/*      <Records /> */}
      {/*    </React.Fragment> */}
      {/*  )} */}
      {/* /> */}
      {/* <Route */}
      {/*  exact */}
      {/*  path="/forms" */}
      {/*  render={() => ( */}
      {/*    <React.Fragment> */}
      {/*      <FormStyles /> */}
      {/*      <Forms /> */}
      {/*    </React.Fragment> */}
      {/*  )} */}
      {/* /> */}
      {/* <Route */}
      {/*  exact */}
      {/*  path="/form/:formId" */}
      {/*  render={() => ( */}
      {/*    <React.Fragment> */}
      {/*      <FormStyles /> */}
      {/*      <Form /> */}
      {/*    </React.Fragment> */}
      {/*  )} */}
      {/* /> */}
      {/* <Route */}
      {/*  exact */}
      {/*  path="/form" */}
      {/*  render={() => ( */}
      {/*    <React.Fragment> */}
      {/*      <FormStyles /> */}
      {/*      <Form /> */}
      {/*    </React.Fragment> */}
      {/*  )} */}
      {/* /> */}
      <Route exact path="/test" render={() => <TestEditor />} />
      <Route exact path="/other" render={() => 'Hello'} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
