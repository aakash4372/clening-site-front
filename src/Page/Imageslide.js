import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './page.css';
import AOS from "aos";
import "aos/dist/aos.css"; 

const images = [
    { before: "/photos/room1.jpg", after: "/photos/room2.jpg" },
    { before: "/photos/room3.jpg", after: "/photos/room4.jpg" },
    { before: "/photos/sofa1.jpg", after: "/photos/sofa2.jpg" },
    { before: "/photos/office2.jpg", after: "/photos/office1.jpg" },
    { before: "/photos/movie1.jpg", after: "/photos/movie2.jpg" },
    { before: "/photos/toilet1.jpg", after: "/photos/toilet2.jpg" },
    { before: "/photos/sink1.jpg", after: "/photos/sink2.jpg" },
    { before: "/photos/toilet3.jpg", after: "/photos/toilet4.jpg" },
    { before: "/photos/window1.jpg", after: "/photos/window2.jpg" },
    { before: "/photos/wood1.jpg", after: "/photos/wood2.jpg" },
    { before: "/photos/fan1.jpg", after: "/photos/fan2.jpg" },
    { before: "/photos/chruch1.jpg", after: "/photos/chruch2.jpg" },
];

const ImageCard = () => {
    useEffect(() => {
        AOS.init(); 
    }, []);

    return (
        <div>
            <h2 className="text-center heading pt-5 pb-5" data-aos='zoom-in' data-aos-duration="1050">
                <span className="line"></span> Our Works<span className="line"></span>
            </h2>
            <Container className="image-card-container mt-5">
                <Row>
                    {images.map((image, index) => (
                        <Col lg={4} md={6} sm={12} key={index} className="mb-4" data-aos='zoom-in' data-aos-duration="1050">
                            <ImageSlider before={image.before} after={image.after} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

const ImageSlider = ({ before, after }) => {
    const [showAfter, setShowAfter] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowAfter((prev) => !prev); // Toggle between before & after images
        }, 3000); // Switch every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <Card className="image-card">
            <div className="image-wrapper">
                <Card.Img className={`image ${showAfter ? "hidden" : "visible"}`} variant="top" src={before} alt="Before" />
                <Card.Img className={`image ${showAfter ? "visible" : "hidden"}`} variant="top" src={after} alt="After" />
            </div>
        </Card>
    );
};

export default ImageCard;
