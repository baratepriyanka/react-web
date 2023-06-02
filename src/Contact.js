// import logo from './logo.svg';
import { Dropdown } from 'bootstrap';
import React from 'react';
import './App.css';
import { useState } from 'react';


const Contact = () => {
  const [data,setData] = useState({
    full_name:'',
    phone:'',
    email:'',
    msg:'',
  });
  const InputEvent = (event) => {
    const {name, value } = event.target;

    setData((preVal) => {
      return{
        ...preVal, 
        [name]:value,
      };
    });
  };
  const fromSubmit = (e) => {
    e.preventDefault();
    alert(`my full name ${data.full_name}`);
  }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us</h1>
      </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={fromSubmit}>
              <div className='mb-3'>
                <label htmlFor="email" className='form-label'>full name</label>
                <input type="text" className='form-control' name="full_name" value={data.fullname} onChange={InputEvent} placeholder='Enter full name' id="" />
              </div>

              <div className='mb-3'>
                <label htmlFor="email" className='form-label'>Phone</label>
                <input type="number" className='form-control' name="phone" value={data.phone} onChange={InputEvent} placeholder='phone number' id="" />
              </div>


              <div className='mb-3'>
                <label htmlFor="email" className='form-label'>Email address</label>
                <input type="email" className='form-control' name="email" value={data.email} onChange={InputEvent} placeholder='' id="" />
              </div>

              <div className='mb-3'>
                <label htmlFor="address" className='form-label'>massage</label>
                <textarea className='form-control' value={data.msg} name="msg" row="3" id=""  onChange={InputEvent}></textarea>
              </div>

              <div className='col-12'>
                <button className='btn btn-outline-primary'>Submit form</button>
              </div>

            </form>

          </div>

        </div>

      </div>
    </>
  );
}

export default Contact;
