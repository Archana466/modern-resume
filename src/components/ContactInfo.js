import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactInfo = () => (
  <div className="card">
    <h5>Contact Information</h5>
    <p><FaEnvelope /> Email: <a href="mailto:archanabc23@gmail.com">archanabc23@gmail.com</a></p>
    <p><FaPhone /> Phone: <a href="tel:+91 6360448048">+91 6360448048</a></p>
  </div>
);

export default ContactInfo;
