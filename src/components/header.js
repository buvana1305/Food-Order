const HeaderComponents = () => {
  return (
    <div className="headerMain">
      <div className="test1">
        <img
          src={require("../../assets/images/swiggylogo.jpg")}
          alt="logo"
          width="50"
          height="50"
        />
        <div className="test2">
          <div>Search</div>
          <div>Offers</div>
          <div>Online Services</div>
          <div>Log In</div>
        </div>
      </div>
    </div>
  );
};
export default HeaderComponents;
