import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Contect from './Contect';
import Sing from './Sing';
import Appointment from './Appointment';
class App extends Component {
  render() {
    return (
       <Router>
      <div className="container center">
         <nav className="menu">
             <h1>Hospital</h1>

             <div className="menu__right">
                 <ul className="menu__list">
                     <li className="menu__list-item"><a className="menu__link menu__link--active" href="/">Home</a></li>
                     <li className="menu__list-item"><a className="menu__link" href="Appointment">Make an online Appointment</a></li>
                     <li className="menu__list-item"><a className="menu__link" href="Contect">Contect</a></li>
                     <li className="menu__list-item"><a className="menu__link" href="Sing">Sing in</a></li>
                 </ul>

                 <button className="menu__search-button"></button>

                 <form className="menu__search-form hide" method="GET">
                     <input className="menu__search-input" placeholder="Type and hit enter"/>
                 </form>
   </div>
         </nav>


         <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/Contect' component={Contect} />
              <Route exact path='/Appointment' component={Appointment} />
              <Route exact path='/Sing' component={Sing} />
          </Switch>
</div>
      </Router>
        );
  }
}

export default App;
