function Signin() {
  return (
    <>
    <section>
          <div className="modal-header border-0">
            <h3 className="modal-title fs-5" id="LoginModalLabel">Login</h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email
                  address</label>
                <input type="email" className="form-control" id="exampleInputEmail1"
                  aria-describedby="emailHelp" placeholder="youremail@gmail.com" />
                <div id="emailHelp" className="form-text">We'll never share your
                  email with anyone else.</div>
              </div>
              <div className="mb-3">
                <div className="d-flex w-100 justify-content-between">
                  <label for="exampleInputPassword1"
                    className="form-label">Password</label>
                  <a href="#" target="_blank" rel="noopener noreferrer"
                    className="text-dark">Forgot Password</a>
                </div>
                <input type="password" className="form-control"
                  id="exampleInputPassword1" placeholder="••••••" />
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">login</button>
                <button type="submit" className="btn btn-link text-primary">Don’t
                  have an account? Register</button>
              </div>
            </form>
          </div>

    </section>
    </>
  );
}
export default Signin;