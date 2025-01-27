import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo'; // Changed from SEO to Seo

const AboutPage = () => (
  <Layout>
    <Seo title="About" /> {/* Ensure usage matches import */}
    <div className="container py-5">
      <h1 className="display-4 mb-4">About Us</h1>
      <p className="lead mb-5">Learn more about Deleens Home Bake. (Placeholder for company history)</p>
      <h2 className="h3 mb-4">Meet the Team</h2>
      <div className="row">
        <div className="col-md-4 text-center mb-4">
          <img className="rounded-circle mb-3" src="https://via.placeholder.com/150" alt="Team Member 1" />
          <p className="h5">Team Member 1</p>
        </div>
        <div className="col-md-4 text-center mb-4">
          <img className="rounded-circle mb-3" src="https://via.placeholder.com/150" alt="Team Member 2" />
          <p className="h5">Team Member 2</p>
        </div>
        <div className="col-md-4 text-center mb-4">
          <img className="rounded-circle mb-3" src="https://via.placeholder.com/150" alt="Team Member 3" />
          <p className="h5">Team Member 3</p>
        </div>
      </div>
      <h2 className="h3 mt-5 mb-4">Customer Testimonials</h2>
      <p className="lead">Read what our customers have to say. (Placeholder for customer testimonials)</p>
    </div>
  </Layout>
);

export default AboutPage;
