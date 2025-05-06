import privacypolicyheroimg from '../assets/img/Privacy-Policy-Hero.svg';

function PrivacyPolicy() {
    return (
        <>
            <section id="privacy-policy-hero-wrapper">
                <div className="container my-auto">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="privacy-policy-hero-content">
                                <h2 className="text-primary">
                                    Privacy Policies Aren’t Just Formalities <br />
                                    <span className="text-secondary">They’re Our Promise.</span>
                                </h2>
                                <p className="text-dark-200">
                                    Your privacy matters to us. Our policy is designed to protect your personal data and give you peace of mind
                                    while using our platform to manage lunch orders and school fundraising.
                                    <br /><br />
                                    We explain exactly what data we collect, how we use it, and how we keep it safe — with no complicated jargon.
                                </p>
                            </div>
                            <div className="privacy-policy-btn-section mt-4">
                                <button className="btn btn-primary">Contact us</button>
                            </div>
                        </div>
                        <div className="col-xl-6 text-end">
                            <div className="privacy-policy-hero-img">
                                <img src={privacypolicyheroimg} alt="Privacy Policy Illustration" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="privacy-policy-content-wrapper">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="privacy-policy-content-heading">
                            <p className='text-primary'>Effective Date: 1 January 2025</p>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <p>Feed My School ("we," "our," or "us") is committed to protecting your privacy. This Privacy and Data Protection Policy outlines how we collect, use, disclose, and protect your personal information when you visit our website or use our platform to place lunch orders and participate in fundraising initiatives.
                            <br /><br />
                            By using our platform, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this policy, please do not use our services.
                        </p>
                    </div>
                    <div className="col-xl-6"></div>
                </div>
            </section>

        </>
    );
}

export default PrivacyPolicy;