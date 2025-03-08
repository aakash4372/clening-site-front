import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './page.css'; // Ensure this file contains the flip card CSS
import AOS from "aos";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import "aos/dist/aos.css";

const services = [
    {
        title: "Service 1",
        content: "Chinna cleaning did a wonderful service. It was a 3 bhk empty house and they made all the nook and corner very clean and shine. Very professional and budget friendly. I would recommend them for sure.",
        image: "/img/office1.jpg"
    },
    {
        title: "Service 2",
        content: "Chinna House Cleaning did an excellent job with our home! They were professional, and thorough, leaving every corner spotless. Highly recommended for anyone looking for reliable and affordable cleaning services.",
        image: "/img/office2.jpg"
    },
    {
        title: "Service 3",
        content: "Service was awesome, I'm very happy and satisfied with their service. I recommend to my friends and family to take their service. So if you are looking for a cleaning service then call Chinna Cleaning and facility....",
        image: "/img/sofa1.jpg"
    }
];

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 800, settings: { slidesToShow: 1 } },
        { breakpoint: 700, settings: { slidesToShow: 1 } },
        { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
    centerMode: true, // Center the active slide
    centerPadding: '0', // Remove extra padding
};

const ReviewSlider = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="review-section py-5" id="WhoWeServe">
            <h2 className="text-center heading mb-5" data-aos="zoom-in" data-aos-duration="1050">
                <span className="line"></span> Reviews<span className="line"></span>
            </h2>

            <Slider {...settings} className="services container">
                {services.map((service, index) => (
                    <div key={index} className="p-3" data-aos="fade-left" data-aos-duration="1050">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                {/* Front Side */}
                                <div className="flip-card-front">
                                    <img src={service.image} alt={service.title} className="card-image" />
                                </div>
                                {/* Back Side */}
                                <div className="flip-card-back">
                                    <p className="service-content">
                                        <FaQuoteLeft size={24} className="text-primary me-2" />
                                        {service.content}
                                        <FaQuoteRight size={24} className="text-primary ms-2" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            <div className="d-flex see-more-line-header container justify-content-end mt-2 see-more pe-5">
                <div className="d-flex see-more-line-header container justify-content-end mt-2 see-more pe-5">
                    <Link to="/our-work" className="see-more-link">
                        See more.. <RiArrowRightDoubleFill className="see-more-icon" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ReviewSlider;