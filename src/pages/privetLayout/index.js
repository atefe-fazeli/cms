import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import  './index.css'
import {route} from '../../route'
function PrivetLayout() {
  return (
    <>
      <Sidebar />
      <div className="main-Container">
        <Navbar />
        <div className="content-container">
          
        </div>
      </div>
    </>
  );
}

export default PrivetLayout;
