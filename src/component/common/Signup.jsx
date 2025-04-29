function Signup() {
  return (
   <>
      <section>
          <div className="modal-header border-0">
            <div className="w-100">
              <h3 className="modal-title fs-5" id="RegisterModalLabel">Create an
                account</h3>
              <p className="mb-0 text-dark-200">Register to start using our school
                lunch platform</p>
            </div>
            <button type="button" className="btn-close" data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
         
          <div className="modal-body">
            <div className="role-register">
              <ul className="nav nav-pills nav-justified mb-3 gap-3" id="pills-tab"
                role="tablist">
                <li className="nav-item" role="presentation">
                  <a className="nav-link active d-flex flex-column gap-2" id="pills-commentary-tab"
                    data-bs-toggle="pill" href="#pills-commentary" role="tab"
                    aria-controls="pills-commentary" aria-selected="true">
                    <i className="ph ph-user"></i>
                    Parent
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link d-flex flex-column gap-2" id="pills-videos-tab"
                    data-bs-toggle="pill" href="#pills-videos" role="tab"
                    aria-controls="pills-videos" aria-selected="false">
                    <i className="ph ph-backpack"></i>
                    School
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link d-flex flex-column gap-2" id="pills-events-tab"
                    data-bs-toggle="pill" href="#pills-events" role="tab"
                    aria-controls="pills-events" aria-selected="false">
                    <i className="ph ph-fork-knife"></i>
                    Restaurant
                  </a>
                </li>
              </ul>

              <div className="tab-content role-register-form" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-commentary"
                  role="tabpanel" aria-labelledby="pills-commentary-tab">
                  <form className="parent-registration-form">
                    <div className="mb-3">
                      <label for="yournameinput" className="form-label">Your Name</label>
                      <input type="text" className="form-control" id="yournameinput" placeholder="Your First name and Last name" />
                    </div>
                    <div className="mb-3">
                      <label for="parentemailinput" className="form-label">Email</label>
                      <input type="text" className="form-control" id="parentemailinput"
                        aria-describedby="emailHelp" />
                      <div id="emailHelp" className="form-text">We'll never share your
                        email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                      <label for="parentcontactnumber" className="form-label">Contact Number</label>
                      <div className="input-group mobile-number-input-group">
                        <button className="btn btn-outline dropdown-toggle rounded-end-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">+91</button>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        <input type="text" className="form-control" id="parentcontactnumber" aria-label="Text input with dropdown button"/>
                      </div>
                    </div>
                    <div className="mb-3 password-wrapper">
                      <label for="parentpasswordcreate" className="form-label">Password</label>
                      <input type="password" className="form-control" id="parentpasswordcreate"/>
                      <button type="button" className="toggle-password" onclick="togglePassword('parentpasswordcreate', this)">
                        <i className="ph ph-eye-slash"></i>
                      </button>
                    </div>
                    
                    <div className="mb-3 password-wrapper">
                      <label for="parentconfirmpassword" className="form-label">Confirm Password</label>
                      <input type="password" className="form-control" id="parentconfirmpassword"/>
                      <button type="button" className="toggle-password" onclick={togglePassword('parentconfirmpassword', this)}>
                        <i className="ph ph-eye-slash"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="tab-pane fade" id="pills-videos" role="tabpanel"
                  aria-labelledby="pills-videos-tab">
                  <form className="School-registration-form">
                    <div className="mb-3">
                      <label for="yournameinput" className="form-label">Your Name</label>
                      <input type="text" className="form-control" id="yournameinput" placeholder="Your First name and Last name"/>
                    </div>
                    <div className="mb-3">
                      <label for="parentemailinput" className="form-label">Email</label>
                      <input type="text" className="form-control" id="parentemailinput"
                        aria-describedby="emailHelp"/>
                      <div id="emailHelp" className="form-text">We'll never share your
                        email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                      <label for="schoolname" className="form-label">School Name</label>
                      <input type="text" className="form-control" id="schoolname" placeholder="School Name"/>
                    </div>
                    <div className="mb-3">
                      <label for="SchoolAddress" className="form-label">School Address</label>
                      <textarea className="form-control" placeholder="Add School Address here" id="SchoolAddress"></textarea>
                    </div>
                    <div className="mb-3">
                      <label for="parentcontactnumber" className="form-label">Contact Number</label>
                      <div className="input-group mobile-number-input-group">
                        <button className="btn btn-outline dropdown-toggle rounded-end-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">+91</button>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                          <li><hr className="dropdown-divider"/></li>
                          <li><a className="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                        <input type="text" className="form-control" id="parentcontactnumber" aria-label="Text input with dropdown button"/>
                      </div>
                    </div>
                    <div className="mb-3 password-wrapper">
                      <label for="parentpasswordcreate" className="form-label">Password</label>
                      <input type="password" className="form-control" id="parentpasswordcreate"/>
                      <button type="button" className="toggle-password" onclick="togglePassword('parentpasswordcreate', this)">
                        <i className="ph ph-eye-slash"></i>
                      </button>
                    </div>
                    
                    <div className="mb-3 password-wrapper">
                      <label for="parentconfirmpassword" className="form-label">Confirm Password</label>
                      <input type="password" className="form-control" id="parentconfirmpassword"/>
                      <button type="button" className="toggle-password" onclick="togglePassword('parentconfirmpassword', this)">
                        <i className="ph ph-eye-slash"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="tab-pane fade" id="pills-events" role="tabpanel"
                  aria-labelledby="pills-events-tab">
                  Events WP_Query goes here.
                </div>
              </div>
              <div className="d-grid gap-2 pt-3">
                <button type="submit" className="btn btn-primary">Register</button>
                <button type="submit" className="btn btn-link text-primary">Already have an account? Login instead</button>
              </div>
            </div>

          </div>
      </section>
   </>
  );
}
export default Signup;