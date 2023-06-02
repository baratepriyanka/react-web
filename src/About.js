// import logo from './logo.svg';
import React from 'react';
import Common from './Common';
import './App.css';
import web from "../src/assets/img_one.webp";
import { ProgressBar } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';

const About = () => {
   
  const percentage = 73

  return (
    <>
    
   <Common  name="welcome to About page" imgsrc={web} visit="/contact" btname="contact Now"/>
   <div className="progressBar">
       <ProgressBar animated now={percentage} label={`${percentage}% completed`} />
       {/* <ProgressBar animated now={45} /> */}
    </div>
    </>
  );
}

export default About;

