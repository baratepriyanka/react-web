// import logo from './logo.svg';
import React from 'react';
import Navbar from './Navbar';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import ContactDemo from './ContactDemo';
import Footer from './Footer';
import './App.css';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Navbar />
      <Switch>
      <Route  exact  path="/" component={Home} />
      <Route  exact  path="/about" component={About} />
      <Route  exact  path="/service" component={Service} />
      <Route  exact  path="/contact" component={Contact} />
      <Route  exact  path="/ContactDemo" component={ContactDemo} />
       <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
