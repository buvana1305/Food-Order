import { useState } from "react";
import { Link } from "react-router-dom";
import UseCheckStatus from "../custom-hook/usecheckstatus";

const HeaderComponents = () => {
  const [loginName, setLoginName] = useState("Login");
  const [cartName, setCardName] = useState("Add To Cart");
  const onlineStatus = UseCheckStatus();

  return (
    <div className="header flex justify-between bg-orange-300 px-2 py-2 ">
      <div className="logo-container">
        <Link to="/">
          <img
            src={require("../../assets/images/headerLogo.png")}
            alt="logo"
            width="90"
            height="100"
          />
        </Link>
      </div>
      <div className="menu-container flex items-center">
        <Link to="/home">
          <div className="px-3 font-semibold">Home</div>
        </Link>
        <Link to="/about">
          <div className="px-3 font-semibold">About</div>
        </Link>

        <Link to="/help">
          <div className="px-3 font-semibold">Help</div>
        </Link>
        <Link to="/contactus">
          <div className="px-3 font-semibold">Contact Us</div>
        </Link>
        <Link to="/grocery">
          <div className="px-3 font-semibold"> Groceries</div>
        </Link>
        <span className="px-3 font-semibold">
          {onlineStatus ? "🟢 Online" : "🔴 Offline"}
        </span>
        <button
          className="px-3 font-semibold"
          onClick={() => {
            setLoginName(loginName === "Login" ? "Logout" : "Login");
          }}
        >
          {loginName}
        </button>
        <button
          className="px-3 font-semibold"
          onClick={() => {
            setCardName(cartName === "Add To Cart" ? "Payment" : "Add To Cart");
          }}
        >
          {cartName}
        </button>
      </div>
    </div>
  );
};
export default HeaderComponents;
