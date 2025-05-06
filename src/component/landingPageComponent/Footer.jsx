import { Link } from "react-router-dom";    
function Footer () {
  

    return (
      <>
        <section>    
          <footer className="footer">
      <div className="container">
          <div className="row footer-sections">
              {/* <!-- Logo and Description Section --> */}
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                  <div className="footer-brand"><h2>Feed <span className="text-secondary">School</span></h2></div>
                  <div className="footer-text"><p className="mb0">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma</p></div>
                  <div className="social-icons">
                      <a className="social-icon"><i className="fab fa-facebook-f"></i></a>
                      <a className="social-icon"><i className="fab fa-twitter"></i></a>
                      <a className="social-icon"><i className="fab fa-instagram"></i></a>
                      <a className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                      <a className="social-icon"><i className="fab fa-youtube"></i></a>
                  </div>
              </div>
  
              {/* <!-- Support Section --> */}
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 footer-nav">
                  <h5>Support</h5>
                  <ul className="footer-nav-list list-unstyled">
                      <li className="footer-nav-list-item"><a>Getting started</a></li>
                      <li className="footer-nav-list-item"><a>Help center</a></li>
                      <li className="footer-nav-list-item"><a>Server status</a></li>
                      <li className="footer-nav-list-item"><a>Report a bug</a></li>
                      <li className="footer-nav-list-item"><a>Chat support</a></li>
                  </ul>
              </div>
  
              {/* <!-- Downloads Section --> */}
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 footer-nav">
                  <h5>Downloads</h5>
                  <ul className="footer-nav-list list-unstyled">
                      <li className="footer-nav-list-item"><a>iOS</a></li>
                      <li className="footer-nav-list-item"><a>Android</a></li>
                      <li className="footer-nav-list-item"><a>Mac</a></li>
                      <li className="footer-nav-list-item"><Link to="privacypolicy">Privacy Policy</Link></li>
                      <li className="footer-nav-list-item"><a>Cancellation Policy</a></li>
                  </ul>
              </div>
  
              {/* <!-- Instagram Section --> */}
              <div className="col-lg-3 col-md-6">
                  <h5>Follow on Instagram</h5>
                  <div className="instagram-pics">
                      <img src="/api/placeholder/320/240" alt="School bus"/>
                      <img src="/api/placeholder/320/240" alt="Healthy lunch"/>
                      <img src="/api/placeholder/320/240" alt="School building"/>
                      <img src="/api/placeholder/320/240" alt="Students eating"/>
                  </div>
              </div>
          </div>
  
          {/* Footer Bottom  */}
          <div className="footer-bottom">
              <p>Copyright © 2025 Feed School | All Rights Reserved | <a>Terms and Conditions</a> | <a>Privacy Policy</a></p>
          </div>
      </div>
  </footer>
 </section>
      </>
    )
  }
  
  export default Footer