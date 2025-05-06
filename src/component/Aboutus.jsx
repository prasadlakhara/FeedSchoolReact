import AboutusHero from "../assets/img/about-us-img-hero.png";

function Aboutus() {
    return (
        <>
            <section id="aboutus-hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="aboutus-hero-img">
                                <img src={AboutusHero} alt="About Us" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
                            <div className="aboutus-hero-text">
                                <h2 className="text-secondary">Who we are?</h2>
                                <div className="aboutus-description-wrapper">
                                    <p>We’re a proudly Canadian company, headquartered in Calgary, Alberta, with a passion for supporting schools and the communities they serve. </p>
                                    <p>Our journey started when we saw a gap—schools needed better ways to fundraise, and families needed a more convenient, reliable, and secure way to manage student lunches. </p>
                                    <p>So, we built a platform to bring it all together.</p>
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
            </section>
            <section id="aboutus-mission-vision">
                <div className="container">
                <div className="section-title">
            <h4 className="mb-3">Our Mission</h4>
            <h1 className="text-primary">Empowring Schools, Simplifying Lunches,<br /><span className="text-secondary"> Supporting Communities</span> </h1>
          </div>

          <div className="mission-section">
            <div className="mission-subtitle text-center">
                <h4 className="text-primary text-center">We’re on a mission to:</h4>
            </div>
          </div>

          <div className="mission-card-wrapper row justify-content-center">
            <div className="col-2">
                <div className="card border-0 text-center">
                    <div className="card-body">
                        <div className="mission-card-content">
                            <div className="mission-card-icon mb-3">
                            <i class="ph ph-building-apartment ph-lg text-primary"></i>
                            </div>
                            <h4 className="card-title text-primary">Empower Schools</h4>
                            <p className="card-text text-dark-200">Turn School Lunches into a sustainable fundraising solution.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-2">
                <div className="card border-0 text-center">
                    <div className="card-body">
                        <div className="mission-card-content">
                            <div className="mission-card-icon mb-3">
                            <i class="ph ph-building-apartment ph-lg text-primary"></i>
                            </div>
                            <h4 className="card-title text-primary">Support Parents</h4>
                            <p className="card-text text-dark-200">Make Ordering Healthy Meals, Fast, easy, worry-free.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-2">
                <div className="card border-0 text-center">
                    <div className="card-body">
                        <div className="mission-card-content">
                            <div className="mission-card-icon mb-3">
                            <i class="ph ph-building-apartment ph-lg text-primary"></i>
                            </div>
                            <h4 className="card-title text-primary">Build Community</h4>
                            <p className="card-text text-dark-200">Create Positive Impact in classroom and beyond.</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
                </div>
            </section>
            <section id="aboutus-bottom-descriotion">
                <div className="container-sm text-center">
                    <p className="mb-4">We believe in building community, in giving back, and in using technology to make life a little easier for busy parents, educators, and volunteers. From the ground up, our platform was designed with security, simplicity, and local impact in mind—because we care about the same things you do.</p>
                    <p className="mb-4">Whether you’re a school administrator looking to streamline hot lunch programs, a parent trying to avoid another last-minute lunch scramble, or a volunteer passionate about supporting education—we’re here to help.</p>
                    <p className="mb-4">Thank you for being part of this journey. Together, we’re making a difference, one lunch at a time.</p>
                </div>
            </section>
        </>
    );
}

export default Aboutus;