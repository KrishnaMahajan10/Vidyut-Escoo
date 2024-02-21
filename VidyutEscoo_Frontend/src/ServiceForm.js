import React, { useState } from 'react';
import './ServiceForm.css';
import Navbar from './Components/NavBar/Navbar';
import Footer from './Components/Footer/Footer';

const ServiceForm = () => {
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    // Other form fields can be added here if needed
  });

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log({ service: selectedService, ...formData });
  };

  return (
    <div>
        <Navbar></Navbar>
    <div id="form-containerrr">
      <form onSubmit={handleSubmit} className='dropdown'>
        <label>
          Service Plan:
          <select name="service" value={selectedService} onChange={handleServiceChange}>
            <option value="">Select Service Plan</option>
            <option value="regular">Regular</option>
            <option value="battery">Battery</option>
            <option value="brakes">Brakes</option>
            <option value="charging">Charging</option>
            <option value="cooling">Cooling</option>
            <option value="software">Software</option>
          </select>
        </label>

        {/* Other form fields can be added here as needed */}
        
        <button type="submit">Submit</button>
      </form>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default ServiceForm;
