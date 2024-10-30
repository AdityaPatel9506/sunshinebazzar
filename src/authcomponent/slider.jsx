// CustomSlider.js
import React, { useState, useEffect } from 'react';
import './login'; // Import your custom CSS

// Import images
import image1 from './sliderImages/natural-cosmetics-bio-serum-herbal-oils-cream-for-2023-11-27-04-57-26-utc.jpg'; // Update the path based on your structure
import image2 from './sliderImages/cut-and-glue-the-paper-kids-crafts-activity-child-2023-11-27-04-50-16-utc.jpg'; // Update the path based on your structure
import image3 from './sliderImages/top-view-of-micellar-water-and-body-creams-on-beig-2023-11-27-04-53-03-utc.jpg'; // Update the path based on your structure

const CustomSlider = () => {
    const slides = [
        { 
            title: 'Welcome to Our Platform', 
            description: 'Join us and enjoy exclusive benefits!', 
            image: image1 // Use imported image
        },
        { 
            title: 'Discover Amazing Products', 
            description: 'Explore our products tailored just for you.', 
            image: image2 // Use imported image
        },
        { 
            title: 'Get Started Today!', 
            description: 'Sign up to get best deals.', 
            image: image3 // Use imported image
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    // Set up interval for automatic slide change
    useEffect(() => {
        const intervalId = setInterval(nextSlide, 10000); // Change slide every 30 seconds

        // Cleanup the interval on component unmount
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className="custom-slider">
            <div className="slider-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div className="slide" key={index}>
                        <img src={slide.image} alt={slide.title} className="slide-image" />
                        <div className="slide-text">
                            <h2>{slide.title}</h2>
                            <p>{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>
         
        </div>
    );
};

export default CustomSlider;
