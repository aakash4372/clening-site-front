import React, { useEffect } from 'react'
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Card } from "react-bootstrap";



export default function Whoweserve() {

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
    {
        title: "RELIABILITY & PROFESSIONALISM",
        content: "We prioritize punctuality and customer satisfaction by providing timely, reliable, and hassle-free services."
    },
    {
        title: "CUSTOMIZED CLEANING PLANS",
        content: "Whether you need a one-time deep cleaning or regular maintenance, we offer flexible packages to fit your schedule and budget."
    },
    {
        title: "AFFORDABLE PRICING WITHOUT COMPROMISING QUALITY",
        content: "We provide high-quality services at competitive rates, ensuring value for money."
    },
    {
        title: "HEALTH & HYGIENE FIRST",
        content: "Our deep cleaning eliminates bacteria, allergens, and viruses, promoting a healthier living and working environment."
    },
    {
        title: "100% CUSTOMER SATISFACTION GUARANTEE",
        content: "We take pride in our work and strive to exceed expectations—your satisfaction is our top priority."
    },
    {
        title: "SERVING COIMBATORE WITH DEDICATION",
        content: "As a local and trusted cleaning service, we understand the needs of Coimbatore residents and businesses, offering personalized and efficient solutions."
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


  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="who-we-serve-section mb-5" id="WhoWeServe" >
                <h2 className="text-center heading mb-5" data-aos="zoom-in" data-aos-duration="1050">
                    <span className="line"></span> WHY CHOOSE US <span className="line"></span>
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
            </div>

    </div>
  )
}
