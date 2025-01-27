import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const ContactPage = () => (
  <Layout>
    <Seo title="Contact" />
    <div className="container py-5">
      <h1 className="display-4 mb-4">Contact Us</h1>
      <p className="lead mb-5">We'd love to hear from you! (Placeholder for contact information)</p>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  </Layout>
);

export default ContactPage;
