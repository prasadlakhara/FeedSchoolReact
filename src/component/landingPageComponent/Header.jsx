import Signup from "@/component/common/Signup";
import Signin from "@/component/common/Signin";
import Logo from "../../../public/assets/img/FeedSchool_Logo.svg";
function Header () {
  return (
    <>
      <section id="feedschool-navbar">
        <nav className="navbar navbar-expand-lg bg-white shadow-sm z-3">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src={Logo } alt srcset /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent">
              <form className="d-flex" role="search">
                <button className="btn btn-outline-primary btn-theme-font me-2"
                  type="button" data-bs-toggle="modal"
                  data-bs-target="#LoginModal"><i className="ph ph-lock-simple"></i>

                  Login</button>
                <button className="btn btn-primary btn-theme-font" type="button"
                  data-bs-toggle="modal" data-bs-target="#RegisterModal"><i
                    className="ph ph-user-plus"></i>

                  Register</button>
              </form>
            </div>
          </div>
        </nav>
      </section>
      <div className="modal fade" id="LoginModal" tabindex="-1"
      aria-labelledby="LoginModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
           <Signin></Signin>
        </div>
      </div>
      </div>


      <div className="modal fade" id="RegisterModal" tabindex="-1"
      aria-labelledby="RegisterModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <Signup></Signup>
        </div>
      </div>
    </div>


    </>
  )
}
export default Header