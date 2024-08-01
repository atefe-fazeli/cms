import { GoBell } from "react-icons/go";
import { BsBrightnessHigh } from "react-icons/bs";

function Navbar() {
  return (
    <div className="navbar_container">
      {/* navbar right side */}
      <div>
        <img className="admin-img" />
        <div className="admin_info">
          <p className="admin_name">عاطفه فاضلی</p>
          <p className="admin_role">برنامه نویس</p>
        </div>
      </div>
      {/* navbar left side */}
      <div>
        <div>
          <input />
          <button></button>
        </div>
        <button><GoBell /></button>
        <button><BsBrightnessHigh/></button>
      </div>
    </div>
  );
}

export default Navbar;
