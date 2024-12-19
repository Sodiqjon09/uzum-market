import React, { useState } from "react";
import "./Login.css";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(true);
      });
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // Signed in with Google
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        setError(true);
        console.error("Google sign-in error:", error.message);
      });
  };

  return (
    <div className="login">
      <div className="loginClass">
        <span className="kirish">kirish</span>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Kirish</button>
          {error && <span className="error">invalid password</span>}
        </form>
        <hr />
        <div className="signin">
          <Link to="/signup">ro'yxatdan o'tish</Link>
        </div>

        <div className="icon">
          <button onClick={handleGoogleSignIn}>
            <FcGoogle size={25} />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
