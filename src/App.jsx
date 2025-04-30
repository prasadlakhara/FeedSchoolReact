import './App.scss'
import { BrowserRouter as Router} from "react-router-dom";
import SiteRouter from "@/router/SiteRouter.jsx";
function App() {
  

  return (
    <>
      <Router>
        <SiteRouter />
      </Router>
    </>
  )
}

export default App
