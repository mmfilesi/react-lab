import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import LabHeader from './components/common/lab-header';

import LabHome from './components/lab-home/lab-home';
import LabCounter from './components/lab-counter/lab-counter';
import LabHierarchy from './components/lab-hierarchy/lab-hierarchy';
import LabDucks from './components/lab-ducks/lab-ducks';
import LabHooks from './components/lab-hooks/lab-hooks';
import LabContext from './components/lab-context/lab-context';

class App extends React.Component {
  
  render() {
    return (
      <Provider store={store}>
        <div className="mainContainer">
          <LabHeader />
          <Router>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/hierarchy">Hierarchy</Link></li>
              <li><Link to="/counter">Counter</Link></li>
              <li><Link to="/ducks">Ducks</Link></li>
              <li><Link to="/hooks">Hooks</Link></li>
              <li><Link to="/context">LabContext</Link></li>             
            </ul>
            <Route path="/" exact component={LabHome} />          
            <Route path="/hierarchy" component={LabHierarchy} />
            <Route path="/counter" component={LabCounter} />
            <Route path="/ducks" component={LabDucks} />
            <Route path="/hooks" component={LabHooks} />
            <Route path="/context" component={LabContext}></Route>                      
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
