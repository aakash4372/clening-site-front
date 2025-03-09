import React, { useEffect } from 'react'
import '../App.css';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AOS from "aos";
import "aos/dist/aos.css";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import ReviewSlider from './review';
import Footer from './Footer';
import Statistics from './Compnycount';

export default function Carousel() {
    useEffect(() => {
        AOS.init();
        const myCarousel = document.querySelector("#mainCarousel");
        if (myCarousel) {
            new window.bootstrap.Carousel(myCarousel, {
                interval: 3000, // 3 seconds
                ride: "carousel",
                touch: true
            });
        }
    }, []);
    const services = [
        {
            title: "EXPERT CLEANING FOR EVERY SPACE",
            content: "We offer professional cleaning services for your home, office, or commercial space.",
        },
        {
            title: "ECO-FRIENDLY & SAFE PRODUCTS",
            content: "We use non-toxic, eco-friendly cleaning products that are safe for your family, pets, and employees while protecting the environment.",
        },
        {
            title: "HIGHLY SKILLED & TRAINED TEAM",
            content: "Our highly trained and experienced cleaning professionals guarantee excellent results every time.",
        },
    ];



    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
    };
    return (
        <div>

<div id="carouselExample" class="carousel slide carousel-fade" 
     data-bs-touch="true"  data-bs-pause="false"  
     data-bs-ride="carousel" data-bs-interval="3000">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={`${process.env.PUBLIC_URL}/img/C.png`} class="d-block w-100" alt="Imagefile 1"/>
    </div>
    <div class="carousel-item">
      <img src={`${process.env.PUBLIC_URL}/img/d.png`} class="d-block w-100" alt="Imagefile 2"/>
    </div>
    <div class="carousel-item">
      <img src={`${process.env.PUBLIC_URL}/img/e.png`} class="d-block w-100" alt="Imagefile 3"/>
    </div>
  </div>
</div>

            



            <div>
                <div
                    className="who-we-are mt-0"
                    style={{
                        background:
                            "linear-gradient(to bottom, #E8F9FF,rgb(205, 231, 240),#E8F9FF, white)",
                    }}
                >
                    <h2 className="text-center heading" data-aos="zoom-in" data-aos-duration="1050">
                        <span className="line"></span> Who We Are <span className="line"></span>
                    </h2>

                    <div className="container my-5">
                        <div className="row align-items-center" data-aos="fade-left" data-aos-duration="1050">
                            <div className="col-12 col-md-6 col-lg-6">
                                {/* Image Wrapper for Zoom Effect */}
                                <div className="image-container">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/img/man.avif`}
                                        alt="cleaning-pic"
                                        className="img-fluid rounded who-we-are-img"
                                    />
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-6">
                                <h2 className="fw-bold">Welcome to Chinna Cleaning Facility</h2>
                                <p className="pt-2">
                                    Chinna Cleaning Facility offers exceptional cleaning services for
                                    residential, office, and commercial spaces. Our professional team
                                    utilizes high-quality products and advanced techniques to create
                                    a clean and hygienic environment. With 11 years of experience in
                                    Coimbatore, we are{" "}
                                    <Link to="/about" className="d-inline">
                                        more...
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Statistics/>

            <div className="who-we-serve-section pt-5 mb-3" id="WhoWeServe" style={{ background: "linear-gradient(to bottom,rgb(205, 231, 240),rgb(205, 231, 240),rgba(205, 231, 240, 0.51),rgba(205, 231, 240, 0.47),rgba(205, 231, 240, 0))" }}>
                <h2 className="text-center heading mb-5" data-aos="zoom-in" data-aos-duration="1050">
                    <span className="line"></span> WHY CHOOSE US<span className="line"></span>
                </h2>

                <Slider {...settings} className="services container">
                    {services.map((service, index) => (
                        <div key={index} className="p-3 d-flex align-items-stretch" data-aos="zoom-in">
                            <Card className="service-card text-center pt-4 d-flex flex-column">
                                <h5 className="service-title text-uppercase mb-3">{service.title}</h5>
                                <p className="service-content flex-grow-1">{service.content}</p>
                            </Card>
                        </div>
                    ))}
                </Slider>

                <div className="d-flex see-more-line-header container justify-content-end mt-2 see-more pe-5">
                    <div className="d-flex see-more-line-header container justify-content-end mt-2 see-more pe-5">
                        <Link to="/about" className="see-more-link">
                            See more.. <RiArrowRightDoubleFill className="see-more-icon" />
                        </Link>
                    </div>
                </div>
            </div>

            <ReviewSlider />
            <Footer />





        </div>
    )
}
