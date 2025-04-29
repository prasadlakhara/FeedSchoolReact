
import { initHeroAnimation } from '@/utils/heroAnimation.js';
import React, { useEffect } from 'react';
import heroImg5 from "../../../public/assets/img/feedschool-hero-img5.png"
import heroImgMobile from "../../../public/assets/img/feedschool-hero-img-mobile.png"
function LandingPage() {

  useEffect(() => {
    initHeroAnimation('.hero-background-elements', '#feedschool-hero');
  }, []);

  return (
    <>
      <section id="feedschool-hero">
        <div className="hero-background-elements"></div>
        <img src={heroImg5} alt="Hero Image" className="hero-img img img-fluid position-absolute bottom-0 d-none d-md-block" />
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
    </>
  );
}
export default LandingPage;