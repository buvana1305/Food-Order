import { useContext } from "react";
import UserContext from "../../ultis/userContext";

const FooterComponents = () => {
  const userDetails = useContext(UserContext);

  return (
    <footer className="w-auto h-auto bg-purple-400">
      <div className="flex-1 text-center grid grid-row-4 gap-6 mx-10 ">
        <div className="px-40">
          <h2 className="font-bold my-6">Food Ordering Site</h2>
          <h2>Created By: {userDetails.loggedName}</h2>
          <div>
            © 2024 Bundl <br></br>
            Technologies Pvt.Ltd
          </div>
        </div>
        <div>
          <h3 className="font-bold">Company</h3>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Swiggy One</li>
            <li>Swiggy Instamart</li>
            <li>Swiggy Genie</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Contact us</h3>
          <ul>
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
          <h4 className="font-bold my-2">Legal</h4>
          <ul>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
            <li>Investor Relations</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">We deliver to:</h4>
          <ul>
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
