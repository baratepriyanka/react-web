// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Common from './Common';
import web from "../src/assets/img_one.webp";
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
       <Common  name="Grow your business with" imgsrc={web} visit="/service" btname="get started"/>
    </>
  );
}

export default Home;
