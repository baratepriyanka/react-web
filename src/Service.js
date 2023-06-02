// import logo from './logo.svg';
import React from 'react';
import './App.css';
import ServiceCard from './ServiceCard';
import ServiceData from './ServiceData';


const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Service</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
            {
              ServiceData.map((val,ind) =>{
                return <ServiceCard key={ind}
                  imgsrc={val.imgsrc} title={val.title}
                />
              })
            }
             {/* <ServiceCard /> */}
              
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Service;
