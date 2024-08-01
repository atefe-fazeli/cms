import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { AiFillProduct } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { GoListOrdered } from "react-icons/go";
import { MdOutlineDiscount } from "react-icons/md";

function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar_title">به داشبورد خود خوش آمدید</h1>
      <ul className="sidebar_ul">
        <li className="sidebar_ul">
          <NavLink to="">
            <AiOutlineHome />
            <span>صفحه اصلی</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="">
            <AiFillProduct />
            <span>محصولات</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="">
            <BiCommentDetail />
            <span>کامنت ها</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="">
            <FaUsers />
            <span> کاربران</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="">
            <GoListOrdered />
            <span> سفارشات</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="">
            <MdOutlineDiscount />
            <span>تخفیف ها </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
