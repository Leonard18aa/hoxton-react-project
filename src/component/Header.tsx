import Logo from "../component/images/logo_white_cr.jpg";
import { FaUserCircle } from 'react-icons/fa';
import "./Header.css";

export function Header() {
  return (
    <div className="Header">
      <img src={Logo} alt="" />
      <h1>Your personal life tracker</h1>
      <button><FaUserCircle className="logo"/></button>
    </div>
  );
}
