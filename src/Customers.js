import React, { useState, useEffect } from 'react';
import './cust.css';
import Navbar from './Components/NavBar/Navbar.js';
import Footer from './Components/Footer/Footer.js';
import service from './Services/service.js';
import { useNavigate, useParams } from 'react-router-dom';



const AddCustomer = () => {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[dob, setDob] = useState('');
    const[mobile, setMobile] = useState('');
    const[address, setAddress] = useState('');
    const[pinCode, setPinCode] = useState('');
    const[city, setCity] = useState('');
    const[state, setState] = useState('');
    
    const navigate = useNavigate();
    const { id } = useParams();

    const saveCustomer = (c)=> {
     c.preventDefault();

  const customer = {
    name,email,password,dob,mobile,address,pinCode,city,state,id,
  };

  if (id) {
    //update
    service
      .update(customer)
      .then((response) => {
        console.log("customer data updated succcessfully", response.data);
      })
      .catch((error) => {
        alert(error.response.status);
        console.log('Error code' + error);
        console.log("something went wrong", error.response.data)
      });
  } else {
    //create
    service
      .create(customer)
      .then((response) => {
        console.log("customer data added succcessfully", response.data);
        navigate('/');
      })
      .catch((error) => {
        console.log("something went wrong", error.response.data)
      });
  }
};

useEffect(() => {
  if (id) {
    service
      .get(id)
      .then((customer) => {
        setName(customer.data.name);
        setEmail(customer.data.email);
        setPassword(customer.data.password);
        setDob(customer.data.dob);
        setMobile(customer.data.mobile);
        setAddress(customer.data.address);
        setPinCode(customer.data.pinCode);
        setCity(customer.data.city);
        setState(customer.data.state);
      })
      .catch((error) => {
        console.log('something went wrong',error);
      });
  }
},[]);


// const CustDetails = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     dob: '',
//     mobile: '',
//     pinCode: '',
//     city: '',
//     state: '',
//   });


// const handleChange = (e) => {
//   const { name, value } = e.target;
//   setFormData({ ...formData, [name]: value });
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   // You can handle form submission logic here
//   console.log(formData);
// };
  return (
    <div>
      <Navbar></Navbar>
    <div className="form-container">
      <form>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </label>

        <label>
          Password:
          <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </label>

        <label>
          Date of Birth:
          <input type="date" name="dob" value={dob} onChange={(e)=>setDob(e.target.value)} />
        </label>

        <label>
          Mobile No:
          <input type="tel" name="mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)} />
        </label>

        <label>
          Address :
          <input type="text" name="address" value={address} onChange={(e)=>setAddress(e.target.value)} />
        </label>

        <label>
            Pin Code:
          <input type="text" name="pinCode" value={pinCode} onChange={(e)=>setPinCode(e.target.value)} />
        </label>

        <label>
          City:
          <input type="text" name="city" value={city} onChange={(e)=>setCity(e.target.value)} />
        </label>

        <label>
          State:
          <input type="text" name="state" value={state} onChange={(e)=>setState(e.target.value)} />
        </label>

        <button type="submit" onClick={(c) => saveCustomer(c)}>Submit</button>
      </form>
    </div>
    <Footer></Footer>
    </div>
  );
};



export default AddCustomer;
