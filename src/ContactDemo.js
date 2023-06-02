// import logo from './logo.svg';
import { Dropdown } from 'bootstrap';
import React from 'react';
import './App.css';
import { useState } from 'react';


const ContactDemo = () => {
  const[email,setEmail] = useState("");
  const[text,setText] = useState("");
  const[allEntry,setAllEntry] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();
    if(email && text ){
        const newEntry= {id: new Date().getTime().toString(), email, text};
        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);
        setEmail("");
        setText("");
    }
   else{
    alert("please fill data");
   }
  }
  
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us</h1>
      </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form action='' onSubmit={submitForm}>
              <div className='mb-3'>
                <label htmlFor="email" className='form-label'>full name</label>
                <input type="text" className='form-control' name="full_name" placeholder='Enter full name' id="" value={text}
                onChange={(e) => setText(e.target.value)} autoComplete="off"/>
              </div>
              <div className='mb-3'>
                <label htmlFor="email" className='form-label'>Phone</label>
                <input type="number" className='form-control' name="phone" placeholder='phone number' id="" autoComplete="off"/>
              </div>

              <div className='mb-3'>
                <label htmlFor="email" className='form-label'>Email address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' name="email"  placeholder='' id="" autoComplete="off"/>
              </div>
              <div className='mb-3'>
                <label htmlFor="address" className='form-label'>massage</label>
                <textarea className='form-control' name="msg" row="3" id="" autoComplete="off"></textarea>
              </div>
              <div className='col-12'>
                <button className='btn btn-outline-primary'>Submit form</button>
              </div>
            </form>
            <div>
                {
                    allEntry.map((curElem) => {
                        const{ id, email, password}=curElem
                        return(
                            <div className='showDataStyles' key={curElem.id}>
                            <p>{curElem.email}</p>
                            <p>{curElem.text}</p>
                            
                            </div>
                        )
                    })
                }
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default ContactDemo;
