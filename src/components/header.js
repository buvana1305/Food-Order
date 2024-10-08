import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UseCheckStatus from "../custom-hook/usecheckstatus";
import UserContext from "../../ultis/userContext";
import { useSelector } from "react-redux";

const HeaderComponents = () => {
  const [loginName, setLoginName] = useState("Login");

  const onlineStatus = UseCheckStatus();
  const userDetails = useContext(UserContext);
  const updateName = () => {
    userDetails.setUserName("RKR");
  };
  const cartSelector = useSelector((store) => {
    return store.cart.items;
  });
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
          className="bg-blue-500 px-2 py-2 rounded-lg"
          onClick={updateName}
        >
          Update Name
        </button>
        <li className="list-none px-1">{userDetails.loggedName}</li>

        <li className="list-none px-3 font-semibold">
          <Link to="/cart">
            Cart
            <div className="mx-2 inline-block w-6 h-6 rounded-full bg-slate-200 text-center">
              {cartSelector.length}
            </div>
          </Link>
        </li>
      </div>
    </div>
  );
};
export default HeaderComponents;
