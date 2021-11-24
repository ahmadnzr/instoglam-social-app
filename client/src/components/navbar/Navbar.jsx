import "./navbar.css";
import Notification from "../../img/notification.svg";
import Message from "../../img/message.svg";
import Setting from "../../img/settings.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Instoglam</span>
      <div className="icons">
        <div className="icon">
          <img src={Notification} alt="" className="iconImg" />
          <div className="counter">2</div>
        </div>
        <div className="icon">
          <img src={Message} alt="" className="iconImg" />
          <div className="counter">2</div>
        </div>
        <div className="icon">
          <img src={Setting} alt="" className="iconImg" />
          <div className="counter">2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
