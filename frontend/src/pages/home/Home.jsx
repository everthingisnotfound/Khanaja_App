import Hero from "../hero/Hero";
import Amenities from '../amenities/Componnent_Amenities';
import TestimonialSlider from '../testimonials/Component_Testimonials';
import FeaturesSection from '../features/Component_Feature';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <Hero />
      </div>
      <div className="feature">
        <FeaturesSection /> {/* Include your FeaturesSection component here */}
      </div>
      <div className="amenities">
        <Amenities /> {/* Include your Amenities component here */}
      </div>
      <div className="testimonials">
        <TestimonialSlider /> {/* Include your TestimonialSlider component here */}
      </div>
    </div>
  );
};

export default Home;
