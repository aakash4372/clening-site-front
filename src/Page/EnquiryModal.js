import React, { useState } from "react";
import { Modal, Button, Form, Spinner } from "react-bootstrap";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const EnquiryModal = ({ show, handleClose }) => {
  var baseurl = process.env.REACT_APP_BASIC_URL;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    type: "",
    location: "",
  });

  const [loading, setLoading] = useState(false);

  const cleaningServices = [
    "Carpet Shampoo Cleaning",
    "Residential Cleaning",
    "Industrial Cleaning",
    "Bathroom Deep Cleaning",
    "Deep Cleaning Service",
    "Tiles Cleaning",
    "Commercial Cleaning",
    "Sofa Cleaning",
    "Glass Cleaning",
    "Kitchen Cleaning",
    "House Cleaning",
    "Others",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${baseurl}/send-email`, formData);
      toast.success(response.data.message || "Enquiry sent successfully!");
      setFormData({ name: "", phone: "", email: "", type: "", location: "" });
      handleClose();
    } catch (error) {
      toast.error("Error sending enquiry. Try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Modal show={show} onHide={handleClose} centered className="enquiry-modal">
        <Modal.Header closeButton>
          <Modal.Title>Enquiry Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} className="p-2">
            <Form.Floating className="mb-3">
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Form.Label>Name</Form.Label>
            </Form.Floating>

            <Form.Floating className="mb-3">
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <Form.Label>Phone</Form.Label>
            </Form.Floating>

            <Form.Floating className="mb-3">
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Form.Label>Email</Form.Label>
            </Form.Floating>

            <Form.Group className="mb-3">
              <Form.Label>Type</Form.Label>
              <Form.Select
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
              >
                <option value="">Select Cleaning Type</option>
                {cleaningServices.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Floating className="mb-3">
              <Form.Control
                type="text"
                name="location"
                placeholder="Enter location"
                value={formData.location}
                onChange={handleChange}
                required
              />
              <Form.Label>Location</Form.Label>
            </Form.Floating>

            <Button variant="primary" type="submit" disabled={loading} className="w-100">
              {loading ? <Spinner animation="border" size="sm" /> : "Submit"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EnquiryModal;
