import React, { useState, useEffect } from "react";
import { Navbar, Nav, Offcanvas, Container, Dropdown, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaInfoCircle, FaBriefcase, FaPhone } from "react-icons/fa";
import { MdCleanHands } from "react-icons/md";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import EnquiryModal from "./EnquiryModal"; // Import Modal

const MyOffcanvas = () => {
  const [show, setShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [modalShow, setModalShow] = useState(false); // State for Modal

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 210);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={`shadow main-navbar ${isScrolled ? "fixed-top" : ""}`}>
      <div className="navtab-container text-white d-none d-md-block px-3 py-2 d-flex align-items-center text-end">
        <FaPhoneAlt className="me-2 text-light" />
        <span className="text-light me-2">For enquiry -</span>
        <a href="tel:+919788525856" className="enquiry-link text-light ms-2">
          +91 978 852 5856
        </a>
      </div>

      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold navbar-brand">
            <img
              src={`${process.env.PUBLIC_URL}/logo/logo.jpg`}
              alt="chinna-pic"
              height="60"
            />
          </Navbar.Brand>

          <Nav className="ms-auto d-none d-lg-flex">
            <NavLink
              to="/"
              className={({ isActive }) => `nav-link mx-2 ${isActive ? "active-link" : ""}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `nav-link mx-2 ${isActive ? "active-link" : ""}`}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) => `nav-link mx-2 ${isActive ? "active-link" : ""}`}
            >
              Services
            </NavLink>
            <NavLink
              to="/our-work"
              className={({ isActive }) => `nav-link mx-2 ${isActive ? "active-link" : ""}`}
            >
              Our Work
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `nav-link mx-2 ${isActive ? "active-link" : ""}`}
            >
              Contact
            </NavLink>

            {/* Button to Open Modal */}
            <Button variant="outline-primary" className="mx-2" onClick={() => setModalShow(true)}>
              Enquiry
            </Button>
          </Nav>

          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9, rotate: -10 }}
            onClick={handleShow}
            className="d-lg-none"
            style={{ cursor: "pointer" }}
          >
            <HiOutlineBars3BottomRight size={30} color="#227ec1" />
          </motion.div>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="start" className="custom-offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <NavLink to="/" className="nav-link my-2 d-flex align-items-center" onClick={handleClose}>
              <FaHome className="me-2" /> Home
            </NavLink>
            <NavLink to="/about" className="nav-link my-2 d-flex align-items-center" onClick={handleClose}>
              <FaInfoCircle className="me-2" /> About
            </NavLink>
            <NavLink to="/services" className="nav-link my-2 d-flex align-items-center" onClick={handleClose}>
              <MdCleanHands className="me-2" /> Services
            </NavLink>
            <NavLink to="/our-work" className="nav-link my-2 d-flex align-items-center" onClick={handleClose}>
              <FaBriefcase className="me-2" /> Our Work
            </NavLink>
            <NavLink to="/contact" className="nav-link my-2 d-flex align-items-center" onClick={handleClose}>
              <FaPhone className="me-2" /> Contact
            </NavLink>
            <Dropdown className="my-2">
              <Dropdown.Toggle
                variant="link"
                className=" dropdown-link text-white d-flex align-items-center text-decoration-none"
                style={{ backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}
              >
                <TbDeviceLandlinePhone className="me-2" /> Enquiry
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="tel:+914224368813" className="d-flex align-items-center">
                  <FaPhone className="me-2" /> +91 422 436 8813
                </Dropdown.Item>
                <Dropdown.Item href="tel:+919788525856" className="d-flex align-items-center">
                  <FaPhone className="me-2" /> +91 978 852 5856
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/* Enquiry Button in Offcanvas */}
            <Button variant="outline-primary" className="mt-3 w-100" onClick={() => setModalShow(true)}>
              Enquiry
            </Button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Enquiry Modal */}
      <EnquiryModal show={modalShow} handleClose={() => setModalShow(false)} />
    </div>
  );
};

export default MyOffcanvas;
