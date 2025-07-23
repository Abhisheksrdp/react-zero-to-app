import downloadImg from "../utils/download.png"

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div>
          <img src={downloadImg} alt="logo" />
        </div>

        <div className="list-container">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default Header;