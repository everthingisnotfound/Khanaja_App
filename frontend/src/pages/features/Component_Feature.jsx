import React from 'react';
import './Feature.css';

const Feature = ({ image, alt, title, description }) => (
  <div className="feature">
    <img src={image} alt={alt} />
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

const FeaturesSection = () => (
  <section className="features">
    <Feature
      image={require('./Delivery_image_removebg_preview.png')} // Update with the correct path to your image
      alt="Car Icon"
      title="Punctual deliveries"
      description="Book an order anytime, anywhere."
    />
    <Feature
      image={require('./payement_icon_removebg_preview.png')} // Update with the correct path to your image
      alt="Payment Icon"
      title="Secure Payments"
      description="Safe and hassle-free transactions."
    />
    <Feature
      image={require('./support_icon_removebg_preview.png')} // Update with the correct path to your image
      alt="Support Icon"
      title="24/7 Support"
      description="Customer service always ready to help."
    />
  </section>
);

export default FeaturesSection;
