import './routerpage.css'
import React, { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import './routerpage.css'
import Footer from '../Page/Footer';
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const data = [
    {
        id: 1,
        img: "/img/carpet-cleaning.jpg",
        extraImg: "/photos/carpet.avif",
        title: "Carpet Shampoo Cleaning",
        text: "Carpets trap dirt, dust, and allergens that can affect air quality. Our professional carpet shampoo cleaning service effectively removes deep-seated dirt, stains, and odors, restoring the beauty and freshness of your carpets while extending their lifespan",
    },
    
    {
        id: 2,
        img: "/img/residential-cleaning.jpg",
        extraImg: "/img/Residential.jpg",
        title: "Residential Cleaning",
        text: "Maintain a spotless and healthy home with our professional residential cleaning services. We clean living rooms, bedrooms, kitchens, and bathrooms to ensure a fresh and hygienic environment for you and your family, whether you need routine maintenance or a one-time deep clean.",
    },
    {
        id: 3,
        img: "/img/industrial-cleaning.jpg",
        extraImg: "/img/Industrial.avif",
        title: "Industrial Cleaning",
        text: "Industrial spaces require specialized cleaning solutions due to heavy machinery, dust accumulation, and grease buildup. Our industrial cleaning services include factory floor Cleaning, equipment maintenance, and waste disposal to ensure a safe and efficient working environment.",
    },
    {
        id: 4,
        img: "/img/bathroom-cleaning.jpg",
        extraImg: "/img/bathroom.jpg",
        title: "Bathroom Deep Cleaning",
        text: "Our bathroom deep cleaning service provides a sparkling clean and sanitized space by effectively removing germs, mold, limescale, grime, and bacteria from tiles, toilets, sinks, and shower areas.",
    },
    {
        id: 5,
        img: "/img/deep-cleaning.jpg",
        extraImg: "/img/deep.avif",
        title: "Deep Cleaning Service",
        text: "Our deep cleaning service is designed to eradicate dirt, dust, and germs from every corner of your space. We pay special attention to hard-to-reach areas, sanitizing and revitalizing your environment using high-quality cleaning products and equipment. This service is ideal for homes, offices, and commercial spaces that need a thorough cleaning.",
    },
    
    {
        id: 6,
        img: "/img/tiles-cleaning.jpg",
        extraImg: "/img/tiles.jpg",
        title: "Tiles Cleaning",
        text: "Over time, tiles and grout accumulate dirt and discoloration. Our tile cleaning service restores the shine to your floors and walls using specialized cleaning agents and high-pressure washing techniques, making your space look new again.",
    },
    {
        id: 7,
        img: "/img/commercial-cleaning.jpg",
        extraImg: "/img/Commercial.jpg",
        title: "Commercial Cleaning",
        text: "A clean workplace enhances productivity and creates a lasting impression. Our commercial cleaning services focus on offices, retail stores, malls, and other business spaces, ensuring cleanliness and hygiene with top-quality products and advanced cleaning techniques.",
    },
    {
        id: 8,
        img: "/img/sofa-cleaning.jpg",
        extraImg: "/photos/sofa.jpg",
        title: "Sofa Cleaning",
        text: "Your sofa accumulates dust, stains, and allergens over time. Our expert sofa cleaning service uses deep extraction methods and shampoos to restore freshness and remove bacteria, ensuring a clean and comfortable seating experience.",
    },
    {
        id: 9,
        img: "/img/glass-cleaning.jpg",
        extraImg: "/photos/glass.png",
        title: "Glass Cleaning",
        text: "Smudges and dust on glass surfaces impair visibility and aesthetics. Our glass cleaning service provides spotless, streak-free windows, mirrors, and glass partitions, enhancing the overall appearance of your home or office.",
    },
    {
        id: 10,
        img: "/img/kitchen-cleaning.jpg",
        extraImg: "/img/kitchen.jpg",
        title: "Kitchen Cleaning",
        text: "The kitchen is the heart of every home and one of the most challenging areas to clean. Our kitchen cleaning service eliminates grease, food stains, and bacteria from countertops, cabinets, stoves, and appliances, ensuring a hygienic cooking space.",
    },
    {
        id: 11,
        img: "/img/kitchen-cleaning.jpg",
        extraImg: "/photos/house.avif",
        title: "House cleaning",
        text: "House cleaning keeps your home tidy, organized, and hygienic by removing dust, dirt, and clutter. Regular cleaning enhances comfort, improves indoor air quality, and prevents the spread of germs. A well-maintained home creates a refreshing and welcoming environment for everyone.",
    },
];

const ZigZagLayout = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS with a duration of 1000ms
    });
    return (
        <div style={{
            background:
                "linear-gradient(to bottom,rgb(195, 229, 241),rgb(241, 244, 245),rgba(178, 223, 240, 0), white)",
        }}>
            <div>
             <h2 className="text-center heading pt-5" data-aos="zoom-in" data-aos-duration="1050">
                <span className="line"></span> Our Services<span className="line"></span>
            </h2>
            <div className='zig-layout'>
                <Container className="my-2">
                    {data.map((item, index) => (
                        <Row
                            key={item.id}
                            className={`align-items-center my-4 ${index % 2 !== 0 ? "flex-md-row-reverse" : ""
                                }`}
                                data-aos="fade-left" data-aos-duration="1050"
                        >
                            <Col md={4}>
                                <Image src={item.extraImg} fluid />
                            </Col>
                            <Col md={8}>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </Col>
                        </Row>
                    ))}
                </Container>

            </div>
            <Footer />
        </div>
        </div>
        
    );
};

export default ZigZagLayout;
