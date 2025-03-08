import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaClipboardCheck } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";

const Statistics = () => {
    const [stats, setStats] = useState({
        review: 0,
        projects: 0,
        employees: 0,
    });

    const [startCounting, setStartCounting] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setStartCounting(true);
                    observer.disconnect(); // Stop observing after triggering once
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!startCounting) return;

        const targetValues = {
            projects: 3000,
            review: 1200,
            employees: 14,
        };

        const duration = 9000; // Animation duration in ms
        const startTime = performance.now();

        const animateCount = (time) => {
            const elapsedTime = time - startTime;
            const progress = Math.min(elapsedTime / duration, 1); // Normalize progress

            setStats({
                review: Math.floor(progress * targetValues.review),
                projects: Math.floor(progress * targetValues.projects),
                employees: Math.floor(progress * targetValues.employees),
            });

            if (progress < 1) {
                requestAnimationFrame(animateCount);
            }
        };

        requestAnimationFrame(animateCount);
    }, [startCounting]);

    return (
        <section ref={sectionRef} className="statistics-section">
            <Container>
                <h2 className="text-center">Our Company's Life Statistics</h2>
                <p className="text-center">
                China Cleaning offers excellent cleaning services for both residential and commercial properties. Our experienced staff has over 11 years of experience and receives extensive training in the latest cleaning techniques. 
                </p>
                <Row className="mt-4 text-center">
                    <Col md={4} className="statistics-card">
                        <FaClipboardCheck size={50} className="statistics-icon" />
                        <h3 className="statistics-number">{stats.projects}+</h3>
                        <h6 className="statistics-text">Projects Completed</h6>
                    </Col>
                    <Col md={4} className="statistics-card">
                        <FaPeopleGroup size={50} className="statistics-icon" />
                        <h3 className="statistics-number">{stats.employees}+</h3>
                        <h6 className="statistics-text">Number of Employees</h6>
                    </Col>
                    <Col md={4} className="statistics-card">
                        <RiCustomerService2Fill size={50} className="statistics-icon" />
                        <h3 className="statistics-number">{stats.review}*</h3>
                        <h6 className="statistics-text">Satisfied review</h6>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Statistics;
