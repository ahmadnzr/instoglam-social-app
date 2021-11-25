import { useEffect, useState } from "react";
import "./app.css";
import Card from "./components/card/Card";
import Navbar from "./components/navbar/Navbar";
import { posts } from "./data";
import { io } from "socket.io-client";

const App = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(io("http://localhost:3001"));
  }, []);

  useEffect(() => {
    socket?.emit("newUser", user);
  }, [socket, user]);

  return (
    <>
      {user ? (
        <div className="container">
          <div className="main">
            <Navbar socket={socket} />
            {posts.map((post) => (
              <Card key={post.id} post={post} socket={socket} user={user} />
            ))}
          </div>
        </div>
      ) : (
        // TODO: Create authentication using exiting user data
        <div className="login">
          <div className="form">
            <h2>SIGN-IN</h2>
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input type="password" placeholder="password" />
            <button onClick={() => setUser(username)}>Login</button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
