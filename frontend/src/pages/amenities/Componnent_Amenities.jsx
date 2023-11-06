import React from 'react';
import './Amenties.css';

const Amenity = ({ image, alt, title, description }) => (
  <div className="amenity">
    <img src={image} alt={alt} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Amenities = () => {
  return (
    <section className="amenities">
      <Amenity
        image={require('./supermarket.webp')}
        alt="Amenity Icon 1"
        title="Supermarket"
        description="Order Conveniently from nearest General store"
      />
      <Amenity
        image={require('./Pharmacy.webp')}
        alt="Amenity Icon 2"
        title="Pharmacy"
        description="Delivery of medicines and diagnostics (need prescription)"
      />
      <Amenity
        image={require('./Restaurant.jpeg')}
        alt="Amenity Icon 3"
        title="Restaurant"
        description="Order food using our services"
      />
      <Amenity
        image={require('./parcel.jpeg')}
        alt="Amenity Icon 4"
        title="Parcel"
        description="Convenient and secure parcel deliveries (example: adhar, admit card, etc.)"
      />
      <Amenity
        image={require('./punctual-removebg-preview.png')}
        alt="Amenity Icon 4"
        title="Punctuality"
        description="Punctuality is our promise, delivering convenience to your doorstep"
      />
    </section>
  );
};

export default Amenities;
