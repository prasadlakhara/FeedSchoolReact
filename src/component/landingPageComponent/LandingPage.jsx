
import { initHeroAnimation } from '@/utils/heroAnimation.js';
import React, { useEffect, useState } from 'react';
import heroImg from "../../assets/img/feedschool-hero-img.png"
import heroImgMobile from "../../assets/img/feedschool-hero-img-mobile.png"
import aboutusimg from '../../assets/img/about-us-img.png'
import featureData from '@/constant/feartureCardsData.js'
function LandingPage() {
  // State to manage the hero image
  const [cards] = useState(featureData);

  useEffect(() => {
    initHeroAnimation('.hero-background-elements', '#feedschool-hero');
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section id="feedschool-hero">
        <div className="hero-background-elements"></div>
        <img src={heroImg} alt="Hero Image" className="hero-img img img-fluid position-absolute bottom-0 d-none d-md-block" />
        <img src={heroImgMobile} alt="Hero Image" className="hero-img img img-fluid position-absolute bottom-0 d-block d-md-none" />
        <div className="hero-section">
          <div className="container">
            <h1 className="text-primary text-center title-font">
              Smarter <span className="text-secondary">School Lunches</span><br />
              for Everyone.
            </h1>
            <p className="text-secondary text-center subtitle-font">
              Connecting Parents, Schools, and Restaurants for <br />
              Better Meal Planning and Delivery.
            </p>
            <div className="d-flex gap-2 justify-content-center mt-5">
              <button className="btn btn-outline-primary btn-theme-font" type="button"
                data-bs-toggle="modal" data-bs-target="#LoginModal"><i
                  className="ph ph-lock-simple"></i>&nbsp;

                Login</button>
              <button className="btn btn-primary btn-theme-font" type="button"
                data-bs-toggle="modal" data-bs-target="#RegisterModal"><i
                  className="ph ph-user-plus"></i>&nbsp;

                Register</button>
            </div>
          </div>
        </div>
      </section>
      <section id='Logos-marquee'>
        <div className="section-title mb-0">
          <h4>Valuable Partners</h4>
        </div>
        {/* Logo Marquee */}
        <div className="logos-marquee">
          <div className="home-logo-wrapper">
            <div className="marquee-overlay"></div>
            <div className="clients-grid logo-animate"><img src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542556_Frame%2018608.svg"
              loading="eager"
              id="w-node-_672280b4-ff28-8ac3-f54a-c76ee9bfac48-09ede84c" alt
              className="client-logo" /><img
                src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542559_deloitte.svg"
                loading="eager"
                id="w-node-_672280b4-ff28-8ac3-f54a-c76ee9bfac49-09ede84c" alt
                className="client-logo" /><img
                src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542554_Amazon%20logo.svg"
                loading="eager" alt className="client-logo" /><img
                src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542555_Frame%2018610.svg"
                loading="eager"
                id="w-node-_672280b4-ff28-8ac3-f54a-c76ee9bfac4b-09ede84c" alt
                className="client-logo" /><img
                src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542558_Frame%2018611.svg"
                loading="eager"
                id="w-node-_672280b4-ff28-8ac3-f54a-c76ee9bfac4c-09ede84c" alt
                className="client-logo" /><img
                src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542557_Frame%2018612.svg"
                loading="eager"
                id="w-node-_672280b4-ff28-8ac3-f54a-c76ee9bfac4d-09ede84c" alt
                className="client-logo" /><img
                src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f54255a_EY.svg"
                loading="eager"
                id="w-node-_672280b4-ff28-8ac3-f54a-c76ee9bfac4e-09ede84c" alt
                className="client-logo" /><img
                src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f54255d_toyota.svg"
                loading="eager"
                id="w-node-_672280b4-ff28-8ac3-f54a-c76ee9bfac4f-09ede84c" alt
                className="client-logo" /><img
                src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f54255c_Frame%2018608.svg"
                loading="eager"
                id="w-node-_672280b4-ff28-8ac3-f54a-c76ee9bfac50-09ede84c" alt
                className="client-logo" /><img
                src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f54255b_airbus.svg"
                loading="eager" alt className="client-logo" /></div>
            <div className="clients-grid logo-animate"><img
              src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542556_Frame%2018608.svg"
              loading="eager"
              id="w-node-_672280b4-ff28-8ac3-f54a-c76ee9bfac53-09ede84c" alt
              className="client-logo" /><img
                src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542559_deloitte.svg"
                loading="eager"
                id="w-node-_672280b4-ff28-8ac3-f54a-c76ee9bfac54-09ede84c" alt
                className="client-logo" /><img
                src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542554_Amazon%20logo.svg"
                loading="eager" alt className="client-logo" /><img
                src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542555_Frame%2018610.svg"
                loading="eager"
                id="w-node-_672280b4-ff28-8ac3-f54a-c76ee9bfac56-09ede84c" alt
                className="client-logo" /><img
                src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542558_Frame%2018611.svg"
                loading="eager"
                id="w-node-_672280b4-ff28-8ac3-f54a-c76ee9bfac57-09ede84c" alt
                className="client-logo" /><img
                src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542557_Frame%2018612.svg"
                loading="eager"
                id="w-node-_672280b4-ff28-8ac3-f54a-c76ee9bfac58-09ede84c" alt
                className="client-logo" /><img
                src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f54255a_EY.svg"
                loading="eager"
                id="w-node-_672280b4-ff28-8ac3-f54a-c76ee9bfac59-09ede84c" alt
                className="client-logo" /><img
                src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f54255d_toyota.svg"
                loading="eager"
                id="w-node-_672280b4-ff28-8ac3-f54a-c76ee9bfac5a-09ede84c" alt
                className="client-logo" /><img
                src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f54255c_Frame%2018608.svg"
                loading="eager"
                id="w-node-_672280b4-ff28-8ac3-f54a-c76ee9bfac5b-09ede84c" alt
                className="client-logo" /><img
                src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f54255b_airbus.svg"
                loading="eager" alt className="client-logo" /></div>
            <div className="clients-grid logo-animate"><img
              src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542556_Frame%2018608.svg"
              loading="eager"
              id="w-node-_672280b4-ff28-8ac3-f54a-c76ee9bfac5e-09ede84c" alt
              className="client-logo" /><img
                src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542559_deloitte.svg"
                loading="eager"
                id="w-node-_672280b4-ff28-8ac3-f54a-c76ee9bfac5f-09ede84c" alt
                className="client-logo" /><img
                src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542554_Amazon%20logo.svg"
                loading="eager" alt className="client-logo" /><img
                src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542555_Frame%2018610.svg"
                loading="eager"
                id="w-node-_672280b4-ff28-8ac3-f54a-c76ee9bfac61-09ede84c" alt
                className="client-logo" /><img
                src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542558_Frame%2018611.svg"
                loading="eager"
                id="w-node-_672280b4-ff28-8ac3-f54a-c76ee9bfac62-09ede84c" alt
                className="client-logo" /><img
                src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542557_Frame%2018612.svg"
                loading="eager"
                id="w-node-_672280b4-ff28-8ac3-f54a-c76ee9bfac63-09ede84c" alt
                className="client-logo" /><img
                src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f54255a_EY.svg"
                loading="eager"
                id="w-node-_672280b4-ff28-8ac3-f54a-c76ee9bfac64-09ede84c" alt
                className="client-logo" /><img
                src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f54255d_toyota.svg"
                loading="eager"
                id="w-node-_672280b4-ff28-8ac3-f54a-c76ee9bfac65-09ede84c" alt
                className="client-logo" /><img
                src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f54255c_Frame%2018608.svg"
                loading="eager"
                id="w-node-_672280b4-ff28-8ac3-f54a-c76ee9bfac66-09ede84c" alt
                className="client-logo" /><img
                src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f54255b_airbus.svg"
                loading="eager" alt className="client-logo" /></div>
            <div className="home-logo-left-gradient"></div>
            <div className="home-logo-left-gradient right"></div>
          </div>
        </div>
      </section>
      <section id="about-us">
        <div className="container" id="about-us-wrapper">
          <div className="section-title">
            <h4>About us</h4>
          </div>
          <div className="section-body row">
            <div className="col-xl-6">
              <div className="about-us-image px-3">
                <img src={aboutusimg} className="img-fluid" />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-us-content d-flex align-items-center h-100">
                <div className="d-flex flex-column justify-content-between h-50">
                  <div className="aboutus-top-content">
                    <h2 className="text-primary">Why Choose Us for Your <br /> <span className="text-secondary">School Lunch?</span></h2>
                    <ul className="about-us-points-list">
                      <li className="about-us-points">Fundraising That Actually Works</li>
                      <li className="about-us-points">Built to Support Schools</li>
                      <li className="about-us-points">Easy-to-use Interface for All Users</li>
                      <li className="about-us-points">Secure & Local</li>
                    </ul>
                  </div>
                  <div className="aboutus-bottom-content">
                    <button className="btn btn-primary">
                      Explore More <i className="ph ph-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="role-cards-wrapper">
        <div className="container">
          <div className="section-title">
            <h4 className="mb-3">Designed for every role</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar <br /> elementum tempus hac tellus libero accumsan. </p>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="row px-0 g-3 h-100">
                <div className="col-xl-12">
                  <div className="card role-card h-100">
                    <div className="card-body role-card-body">
                      <p className="card-title role-card-title">parents</p>
                      <p className="card-subtitle role-card-subtitle">Order meals, track deliveries,
                        <br />
                        and set preferences.</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="card role-card h-100">
                    <div className="card-body role-card-body">
                      <p className="card-title role-card-title">Restaurant</p>
                      <p className="card-subtitle role-card-subtitle">Handle orders,
                        <br />
                        schedules, and deliveries.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="card role-card full-height-card">
                <div className="card-body role-card-body">
                  <p className="card-title role-card-title">School</p>
                  <p className="card-subtitle role-card-subtitle">Manage menus, <br />
                    approvals, and coordination.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="feature-card-wrapper">
        <div className="container">
          <div className="section-title">
            <h4 className="mb-3">Browse our set of features</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar <br /> elementum tempus hac tellus libero accumsan. </p>
          </div>
          <div className="row">
            {cards.map((card, index) => (
              <div className="col-xl-3" key={index}>
                <div className="card feature-card">
                  <div className="feature-card-body card-body d-flex flex-column justify-content-between">
                    <div className="card-top-content">
                      <div className="card-icon">
                        <i className={card.icon}></i>
                      </div>
                      <div className="card-title feature-card-title">
                        {card.title}
                      </div>
                      <div className="card-subtitle feature-card-subtitle">
                        {card.description}
                      </div>
                    </div>
                    <div className="card-bottom-content">
                      <button className="btn btn-outline-primary border-0">
                        Learn More <i className="ph ph-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

            ))}



          </div>
        </div>
      </section>
    </>
  );
}
export default LandingPage;