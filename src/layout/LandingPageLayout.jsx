import Header from  "@/component/landingPageComponent/Header.jsx";
import Footer from  "@/component/landingPageComponent/Footer.jsx";
import { Outlet } from "react-router-dom";
function LandingPageLayout() {
  

  return (
    <>
      <section>
        <Header />
        <section className="landing-page-content">
          <Outlet />
        </section>
        <Footer />
      </section>
    </>
  )
}

export default LandingPageLayout
