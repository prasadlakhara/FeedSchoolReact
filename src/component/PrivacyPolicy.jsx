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
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 mb-4">
                            <div className="privacy-policy-content-heading">
                                <p className='text-primary fw-bold'>Effective Date: 1 January 2025</p>
                            </div>
                        </div>
                        <div className="col-xl-6 terms-description-wrapper">
                            <div className="top-description">
                                <p>Feed My School ("we," "our," or "us") is committed to protecting your privacy. This Privacy and Data Protection Policy outlines how we collect, use, disclose, and protect your personal information when you visit our website or use our platform to place lunch orders and participate in fundraising initiatives.
                                    <br /><br />
                                    By using our platform, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this policy, please do not use our services.
                                </p>
                            </div>
                            <div className="terms-description">
                                <div className="terms-description-list">
                                    <div className="terms-description-heading">
                                        1. Information We Collect
                                    </div>
                                    <div className="terms-description-content">
                                        <p className='mb-0'>We collect personal information that is necessary for the provision of our services, including:</p>
                                        <div className="row g-3 mt-2">
                                            <div className="col-xl-6">
                                                <div className="card terms-description-card">
                                                    <div className="terms-description-card-body card-body d-flex align-items-center">
                                                        <i className="ph ph-user-focus ph-lg"></i>
                                                        <div className="terms-description-card-content">
                                                            <h5 className='terms-description-list-title'>Personal Information</h5>
                                                            <p>Name and email address</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="card terms-description-card">
                                                    <div className="terms-description-card-body card-body d-flex align-items-center">
                                                        <i className="ph ph-student ph-lg"></i>
                                                        <div className="terms-description-card-content">
                                                            <h5 className='terms-description-list-title'>Student Information</h5>
                                                            <p>Name and grade</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="card terms-description-card">
                                                    <div className="terms-description-card-body card-body d-flex align-items-center">
                                                        <i className="ph ph-credit-card ph-lg"></i>
                                                        <div className="terms-description-card-content">
                                                            <h5 className='terms-description-list-title'>Payment Information</h5>
                                                            <p>Payments are securely handled by third-party processors.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="card terms-description-card">
                                                    <div className="terms-description-card-body card-body d-flex align-items-center">
                                                        <i className="ph ph-database ph-lg"></i>
                                                        <div className="terms-description-card-content">
                                                            <h5 className='terms-description-list-title'>Usage Data</h5>
                                                            <p>Automatically collected data like IP, browser, and OS.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="terms-description-list">
                                    <div className="terms-description-heading">
                                        2. How We Use Your Information
                                    </div>
                                    <div className="terms-description-content">
                                        <p className='mb-0'>We use your personal information for the following purposes:</p>
                                        <ul className='mt-2'>
                                            <li>To process and manage lunch orders.</li>
                                            <li>To facilitate school fundraising efforts.</li>
                                            <li>To communicate with you regarding your orders or account.</li>
                                            <li>To improve our services and platform.</li>
                                            <li>To comply with legal obligations.</li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="terms-description-list">
                                    <div className="terms-description-heading">
                                        3. Data Sharing and Disclosure
                                    </div>
                                    <div className="terms-description-content">
                                        <p className='mb-0'>We will not sell, rent, or share your personal information with third parties, except as follows:</p>
                                        <div className="row g-3 mt-2">
                                            <div className="col-xl-12">
                                                <div className="card terms-description-card bg-transparent">
                                                    <div className="terms-description-card-body card-body d-flex">
                                                        <i className="ph ph-users-three ph-lg"></i>
                                                        <div className="terms-description-card-content">
                                                            <h5 className='terms-description-list-title'>With Schools and Vendors:</h5>
                                                            <p>For the purpose of fulfilling lunch orders, student details (name, grade, and order history) may be shared with the relevant school lunch coordinator and selected vendors.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="card terms-description-card bg-transparent">
                                                    <div className="terms-description-card-body card-body d-flex">
                                                        <i className="ph ph-network ph-lg"></i>
                                                        <div className="terms-description-card-content">
                                                            <h5 className='terms-description-list-title'>With Service Providers:</h5>
                                                            <p>We may share your information with trusted third-party service providers who assist in operating our platform, processing payments, or conducting business activities. These providers are obligated to maintain the confidentiality of your information.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="card terms-description-card bg-transparent">
                                                    <div className="terms-description-card-body card-body d-flex">
                                                        <i className="ph ph-scales ph-lg"></i>
                                                        <div className="terms-description-card-content">
                                                            <h5 className='terms-description-list-title'>Legal Compliance:</h5>
                                                            <p>We may disclose your information if required by law, such as to comply with a subpoena or legal process.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 terms-description-wrapper">
                            <div className="terms-description">
                                <div className="terms-description-list">
                                    <div className="terms-description-heading">
                                        4. Data Retention
                                    </div>
                                    <div className="terms-description-content">
                                        <p className='mb-0'>Your personal information will be retained only for as long as necessary to fulfill the purposes outlined in this policy or as required by law. Once the information is no longer needed, it will be securely deleted or anonymized.</p>
                                    </div>
                                </div>
                                <div className="terms-description-list">
                                    <div className="terms-description-heading">
                                        5. Security of Your Information
                                    </div>
                                    <div className="terms-description-content">
                                        <p className='mb-0'>We take reasonable precautions to protect your personal data. Our platform uses encryption and security protocols to safeguard your information from unauthorized access, disclosure, alteration, and destruction. However, no system is entirely secure, and we cannot guarantee the absolute security of your data.</p>
                                    </div>
                                </div>
                                <div className="terms-description-list">
                                    <div className="terms-description-heading">
                                        6. Your Rights
                                    </div>
                                    <div className="terms-description-content">
                                        <p className='mb-0'>You have the right to:</p>
                                        <ul className='my-3'>
                                            <li>Access: Request a copy of the personal information we hold about you.</li>
                                            <li>Rectification: Request correction of any inaccurate or incomplete information.</li>
                                            <li>Deletion: Request deletion of your personal information, subject to certain legal exceptions.</li>
                                            <li>Opt-Out: You can opt-out of promotional emails at any time by following the unsubscribe instructions in the emails.</li>
                                        </ul>
                                        <p className='mb-0'>To exercise any of these rights, please contact us using the details provided below.</p>
                                    </div>
                                </div>
                                <div className="terms-description-list">
                                    <div className="terms-description-heading">
                                        7. Third-Party Links
                                    </div>
                                    <div className="terms-description-content">
                                        <p className='mb-0'>Our platform may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.</p>
                                    </div>
                                </div>
                                <div className="terms-description-list">
                                    <div className="terms-description-heading">
                                        8. Changes to This Privacy Policy
                                    </div>
                                    <div className="terms-description-content">
                                        <p className='mb-0'>We may update this Privacy and Data Protection Policy from time to time. Any changes will be posted on this page with an updated "Effective Date." We encourage you to review this policy periodically for any updates.</p>
                                    </div>
                                </div>
                                <div className="terms-description-list">
                                    <div className="terms-description-heading">
                                        9. Contact Us
                                    </div>
                                    <div className="terms-description-content">
                                        <p className='mb-0'>If you have any questions or concerns about this policy or how we handle your personal information, please contact us at:</p>
                                        <div className="mt-4">
                                            <h5>Email: support@hdit.ca </h5>
                                            <h5>Phone: [Insert Phone Number]</h5>
                                            <h5>Address: [Insert Address]</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default PrivacyPolicy;