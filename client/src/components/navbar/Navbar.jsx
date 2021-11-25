import "./navbar.css";
import Notification from "../../img/notification.svg";
import Message from "../../img/message.svg";
import Setting from "../../img/settings.svg";
import { useEffect, useState } from "react";

const Navbar = ({ socket }) => {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    socket.on("getNotification", (data) => {
      setNotifications((prev) => [...prev, data]);
    });
  }, [socket]);

  const displayNotification = ({ senderName, type }) => {
    let action;
    switch (type) {
      case 1:
        action = "liked";
        break;
      case 2:
        action = "commented";
        break;
      case 3:
        action = "shared";
        break;
    }

    return (
      <span className="notification">{`${senderName} ${action} your post`}</span>
    );
  };

  const handleClickButton = () => {
    setNotifications([]);
    setOpen(false);
  };

  return (
    <div className="navbar">
      <span className="logo">Instoglam</span>
      <div className="icons">
        <div className="icon" onClick={() => setOpen(!open)}>
          <img src={Notification} alt="" className="iconImg" />
          {notifications.length > 0 && (
            <div className="counter">{notifications.length}</div>
          )}
        </div>
        <div className="icon" onClick={() => setOpen(!open)}>
          <img src={Message} alt="" className="iconImg" />
        </div>
        <div className="icon" onClick={() => setOpen(!open)}>
          <img src={Setting} alt="" className="iconImg" />
        </div>
      </div>
      {open && (
        <div className="notifications">
          {notifications.map((n) => displayNotification(n))}
          <button className="nButton" onClick={handleClickButton}>
            Mark as read
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
