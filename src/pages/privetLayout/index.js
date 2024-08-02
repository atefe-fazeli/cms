import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import  './index.css'
import Routes from "../../route";
import { useRoutes } from "react-router-dom";
function PrivetLayout() {
  let routing = useRoutes(Routes)
  return (
    <>
      <Sidebar />
      <div className="main-Container">
        <Navbar />
        <div className="content-container">
          {routing}
        </div>
      </div>
    </>
  );
}

export default PrivetLayout;
