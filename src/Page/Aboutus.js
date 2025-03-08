import React from 'react'
import Whoweserve from '../routerpage/Whoweserve'
import Footer from './Footer'

export default function Aboutus() {
  return (
    <div style={{
      background: "linear-gradient(to bottom, #E8F9FF 0%, #E8F9FF 30%, white 50%,rgba(232, 249, 255, 0) 70%,rgba(2, 7, 8, 0))"
    }}
    >
      <div>
        <div
          className="who-we-are mt-0">
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
                  China Cleaning Facility offers exceptional cleaning services for residential, office, and commercial spaces. Our professional team utilizes high-quality products and advanced techniques to create a clean and hygienic environment. With 11 years of experience in Coimbatore, we are dedicated to upholding principles of reliability and professionalism, ensuring safe and welcoming spaces for families, friends, and colleagues.
                </p>
              </div>

              <p class="pt-2 text-center sub-text-who text-dark pt-lg-3" style={{ color: "black" }}>
                You can trust us to maintain the highest cleanliness and customer satisfaction standards.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Whoweserve/>
      <div className='pt-5'><Footer/></div>
      

    </div>
  )
}
