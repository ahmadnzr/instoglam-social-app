import { useState } from "react";
import "./app.css";
import Card from "./components/card/Card";
import Navbar from "./components/navbar/Navbar";
import { posts } from "./data";

const App = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");

  return (
    <>
      {user ? (
        <div className="container">
          <div className="main">
            <Navbar />
            {posts.map((post) => (
              <Card key={post.id} post={post} />
            ))}
            <span className="username">{user}</span>
          </div>
        </div>
      ) : (
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
