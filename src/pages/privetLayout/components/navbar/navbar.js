import { GoBell } from "react-icons/go";
import { BsBrightnessHigh } from "react-icons/bs";
import image from '../../../../assets/images/images.jpg'
import './navbar.css'
function Navbar() {
  return (
    <div className="navbar_container">
      {/* navbar right side */}
      <div className="navbar-section-right">
        <img className="admin-img" src={image}/>
        <div className="admin_info">
          <p className="admin_name">عاطفه فاضلی</p>
          <p className="admin_role">برنامه نویس</p>
        </div>
      </div>
      {/* navbar left side */}
      <div className="navbar-section-left">
        <div className="navbar-input-container">
          <input className="navbar-input" placeholder="جست‌و‌جو‌کنید..."/>
          <button className="navbar-input-button">جست و جو</button>
        </div>
        <button className="navbar-button"  ><GoBell /></button>
        <button className="navbar-button"><BsBrightnessHigh/></button>
      </div>
    </div>
  );
}

export default Navbar;
