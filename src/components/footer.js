import { useContext } from "react";
import UserContext from "../../ultis/userContext";

const FooterComponents = () => {
  const userDetails = useContext(UserContext);

  return (
    <footer className="foot">
      <div className="footDiv">
        <div className="foot1">
          <h2>
            <img
              src={require("../../assets/images/footerlogo.jpg")}
              width="70"
              height="100"
              alt="empty"
            />
            Swiggy
          </h2>
          <h2>Created By:{userDetails.loggedName}</h2>
          <div class="line2">
            © 2024 Bundl <br></br>
            Technologies Pvt.Ltd
          </div>
        </div>
        <div className="foot1">
          <h3>Company</h3>
          <ul className="line2">
            <li>About</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Swiggy One</li>
            <li>Swiggy Instamart</li>
            <li>Swiggy Genie</li>
          </ul>
        </div>
        <div className="foot1">
          <h3>Contact us</h3>
          <ul className="line2">
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
          <h4>Legal</h4>
          <ul className="line2">
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
            <li>Investor Relations</li>
          </ul>
        </div>
        <div className="foot1">
          <h4>We deliver to:</h4>
          <ul className="line2">
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default FooterComponents;
