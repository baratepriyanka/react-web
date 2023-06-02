// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import web from "../src/assets/img_one.webp";
import { NavLink } from 'react-router-dom';



const ServiceCard = (props) => {
  return (
    <>
              <div className="col-md-4 col-10 mx-auto ">
              <div className='card'>
                <img src={props.imgsrc} className="card-img-top"/>  
                <div className='card-body'>
                <h5 className='card-title'>{props.title}
                </h5>
                <p className='card-text'>Some quick example text to build on the caed title and </p>
                <NavLink to='#' className='btn btn-primary'>Go Somewhere</NavLink>
                </div>        
                     </div>
              </div>
    </>
  );
}

export default ServiceCard;
