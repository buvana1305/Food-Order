import UserClass from "./Userclass";
import UserFunction from "./Userfunction";
const AboutUs = () => {
  return (
    <div className="w-8/12 my-6 m-auto">
      <div className="main-cont bg-gray">
        <UserFunction
          name="Bhuvaneswari"
          email="Bhuvaneswari Rajendran"
          id="273159"
        />
        <UserClass
          name="Bhuvaneswari from class based comp"
          email="bhuvanarajendran from class based comp"
          id="213159 from class based comp"
        />
      </div>
    </div>
  );
};
export default AboutUs;
