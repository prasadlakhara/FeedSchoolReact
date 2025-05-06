import {Routes , Route} from "react-router-dom";
import Userlist from "@/component/landingPageComponent/Userlist.jsx";
import User from "@/component/landingPageComponent/User.jsx";
import LandingPageLayout from "@/layout/LandingPageLayout.jsx";
import ManagementSchoolLayout from "@/layout/ManagementSchoolLayout.jsx";
import ParentLayout from "@/layout/ParentLayout.jsx";
import Aboutus from "@/component/Aboutus";
import RestaurantLayout from "@/layout/RestaurantLayout.jsx";
import LandingPage from "../component/landingPageComponent/LandingPage";
import PrivacyPolicy from "../component/PrivacyPolicy";
function SiteRouter (){
    return(
        
        <>
            <Routes>
                <Route path="" element={<LandingPageLayout />} >
                    <Route index element={<LandingPage />} />
                    <Route path="aboutus"  element={<Aboutus />} /> 
                    <Route path="privacypolicy"  element={<PrivacyPolicy />} /> 
                </Route>
                <Route path="school"  element={<ManagementSchoolLayout />} /> 
                <Route path="parent"  element={<ParentLayout />} /> 
                <Route path="restaurant"  element={<RestaurantLayout />} /> 
            </Routes>
        </>
    )
}
export default SiteRouter