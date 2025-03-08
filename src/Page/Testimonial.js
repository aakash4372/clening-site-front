import React, { useEffect } from "react";
import Slider from "react-slick";
import { Container, Card } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../routerpage/routerpage.css"; // Custom CSS for styling

import { FaStar, FaStarHalfAlt, FaRegStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa"; // Import star & quote icons

const reviews = [
    {
        name: "Sharvika",
        review: `Chinna cleaning did a wonderful service. It was a 3 bhk empty house and they made all the nook and corner very clean and shine. Very professional and budget friendly.I would recommend them for sure.`,
        rating: 5
    },
    {
        name: "Anisha Arumugam",
        review: `Chinna House Cleaning did an excellent job with our home! They were professional, and thorough, leaving every corner spotless. Highly recommended for anyone looking for reliable and affordable cleaning services.`,
        rating: 4
    },
    {
        name: "Nisha Sathiyean",
        review: `Service was awesome,I'm very happy and satisfied with their service. I recommend to my friends and family to take their service. So if you are looking for a cleaning service then call Chinna Cleaning and facility.`,
        rating: 5
    },
    {
        name: "Maniyarasu thangavelu",
        review: `Highly recommended. Very professional, on time and you can't unsee their magic. Price quoted is very reasonable and 20% lesser than urban company.`,
        rating: 5
    },
    {
        name: "Vibin varghese",
        review: `Good service. They came on time and did deep cleaning of my 2 BHK flat. Happy with the results.`,
        rating: 4.5
    },
    {
        name: "Sona Prakash",
        review: `Very good service with reasonable pricing.`,
        rating: 4.5
    },
];

// Function to display stars based on rating
const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <>
            {[...Array(fullStars)].map((_, i) => <FaStar key={i} color="#FFD700" />)}
            {halfStar && <FaStarHalfAlt color="#FFD700" />}
            {[...Array(emptyStars)].map((_, i) => <FaRegStar key={i} color="#FFD700" />)}
        </>
    );
};

const ReviewCardSlider = () => {
    useEffect(() => {
        AOS.init();
    });

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Default: Show 3 reviews per slide
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            { breakpoint: 992, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
            { breakpoint: 576, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div>
            <h2 className="text-center heading pt-5" data-aos='zoom-in' data-aos-duration="1050">
                <span className="line"></span> Our Client Says<span className="line"></span>
            </h2>
            <Container className="review-slider-container">
                <Slider {...settings}>
                    {reviews.map((review, index) => (
                        <div key={index} className="review-card-wrapper">
                            <Card className="review-card"  data-aos="zoom-in" data-aos-duration="1050">
                                <Card.Body className="text-center">
                                    <Card.Title>{review.name}</Card.Title>
                                    <div className="review-stars">{renderStars(review.rating)}</div>
                                    <Card.Text className="review-text">
                                        <FaQuoteLeft className="quote-icon" /> {review.review} <FaQuoteRight className="quote-icon" />
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </Slider>
            </Container>
        </div>
    );
};

export default ReviewCardSlider;
