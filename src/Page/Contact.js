import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import './page.css';

const ContactSection = () => {
    return (
        <div className='d-flex flex-column min-vh-100' style={{ background: "linear-gradient(to bottom,rgb(188, 227, 241), white)" }}>

            <h2 className="text-center heading pt-5">
                <span className="line"></span> Contact<span className="line"></span>
            </h2>
            <div className="contact-page">
                <Container className="flex-grow-1"> {/* Pushes content upwards */}
                    <Row>
                        <Col>
                            <div className="contact-page">
                                <h5 className="text-start">
                                    <Link to="/" className="back-link">
                                        <RiArrowLeftDoubleLine className="back-icon" /> Back
                                    </Link>
                                </h5>
                            </div>
                        </Col>
                    </Row>
                    <Row className="g-4">
                        {/* Left Side - Contact Info & Social Media */}
                        <Col lg={6} md={12}>
                            <div className="d-flex flex-column gap-4">
                                {/* Contact Info */}
                                <Card className="custom-card shadow-sm p-4">
                                    <h4 className="fw-bold text-start mb-4">Contact Us</h4>
                                    <p>
                                        <FaPhone className="" color="green" />
                                        <a href="tel:9788525856" className="text-decoration-none text-dark ms-2">
                                            9788525856
                                        </a>
                                    </p>
                                    <p>
                                        <FaEnvelope className="" color="orange" />
                                        <a href="mailto:chinnaclgfacility@gmail.com" className="text-decoration-none text-dark ms-2">
                                            chinnaclgfacility@gmail.com
                                        </a>
                                    </p>
                                    <p>
                                        <FaMapMarkerAlt className="me-2" color="blue" />
                                        No 204 Maruthakutti Street, Rathinapuri, Coimbatore - 641027
                                    </p>
                                    <h5 className="fw-bold mt-3">Service Locations:</h5>
                                    <p>Coimbatore, Tirupur, Pollachi, Mettupalayam, Palakkad, Ooty</p>
                                </Card>

                                {/* Social Media */}
                                <Card className="custom-card shadow-sm text-start p-3">
                                    <h5 className="fw-bold mb-4">Follow Us</h5>
                                    <div className="d-flex justify-content-start gap-3">
                                        <a href="https://www.facebook.com/share/163a4sovT5" target="_blank" rel="noopener noreferrer" className="text-primary">
                                            <FaFacebook size={24} />
                                        </a>
                                        <a href="https://www.instagram.com/chinna_cleaning_facility?igsh=dWR2MTd1OG9yN3Bq" target="_blank" rel="noopener noreferrer" className="text-danger">
                                            <FaInstagram size={24} />
                                        </a>
                                        <a href="https://youtube.com/@chinnacleaningfacility?si=TEXo-4S7m8fk9Nuc" target="_blank" rel="noopener noreferrer" className="text-info">
                                            <FaYoutube size={24} />
                                        </a>
                                    </div>
                                </Card>
                            </div>
                        </Col>

                        {/* Right Side - Google Map */}
                        <Col lg={6} md={12}>
                            <Card className="contact-map shadow-sm">
                                <iframe
                                    title="Google Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1412136091985!2d76.95996269999999!3d11.0280301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85960e2cff001%3A0x91a1f751376261c4!2sChinna%20Cleaning%20%26%20Facility!5e0!3m2!1sen!2sin!4v1740987373446!5m2!1sen!2sin"
                                    width="100%"
                                    height="440"
                                    style={{ border: 0, borderRadius: "10px" }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>


            {/* Footer Section */}
            <footer className="bg-dark text-light text-center p-3 mt-auto">
                <Container>
                    <Row>
                        <Col>
                            <p className="mb-0">&copy; {new Date().getFullYear()}
                                <a
                                    href="https://bmtechx.in"
                                    target="_blank"
                                    without
                                    rel="noreferrer"
                                    className="text-white text-decoration-none ms-1"
                                >
                                    BMTECHx
                                </a>
                                . All Rights Reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
};

export default ContactSection;
