import React, { useState } from "react";

const Contact = () => {

  const [data, setData] = useState({
    fullname:'',
    email:'',
    phone:'',
    msg:'',
  });

  const InputEvent = (event) =>{
    const {name,value} = event.target;

    setData((prevalue) =>{
      return{
        ...prevalue,
        [name]: value,
      }
    })
  }

  const formSubmit =(e) =>{
    e.preventDefault();
    alert(
      `My name is ${data.fullname}.My Emial is ${data.email}.My Phone number is ${data.phone}message is ${data.msg}.`
    )
  }

  
  return (
    <>
      <div className=" my-5">
        <h1 className=" text-center"> Contact Us </h1>
      </div>
      <div className=" container contact_div mb-5">
        <div className=" row">
          <div className=" col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter Your Name"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="Enter Your Email"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Enter Your Phone Number"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Message
                </label>
                <textarea
                  rows='3'
                  class="form-control"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              
              <button type="submit" class="btn btn-outline-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
