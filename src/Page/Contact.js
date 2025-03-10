import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import './page.css';

const ContactSection = () => {
    return (
        <div className='d-flex flex-column min-vh-100' style={{ background: "linear-gradient(to bottom,rgb(188, 227, 241), white)" }}>

            <h2 className="text-center heading pt-5">
                <span className="line"></span> Contact <span className="line"></span>
            </h2>
            
            <div className="contact-page">
                <Container className="flex-grow-1 d-flex justify-content-center align-items-center">
                    <Row className="g-4 justify-content-center">
                        <Col lg={12} md={10} sm={12}> {/* Increased width */}
                            <div className="d-flex flex-column gap-4">
                                
                                {/* Contact Info */}
                                <Card className="custom-card shadow-sm p-4">
                                    <h3 className="fw-bold text-start mb-4">Contact Us</h3>
                                    <p>
                                        <FaPhone color="green" />
                                        <a href="tel:9788525856" className="text-decoration-none text-dark ms-2">
                                            9788525856
                                        </a>
                                    </p>
                                    <p>
                                        <FaEnvelope color="orange" />
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
                                    <h3 className="fw-bold mb-4">Follow Us</h3>
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
