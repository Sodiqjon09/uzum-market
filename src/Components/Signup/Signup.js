import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
function Signup() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const auth = getAuth();

  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
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
        <span className="kirish">ro'yxatdan o'tish</span>
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
          <button type="submit">ro'yxatdan o'tish</button>
        </form>
        <hr />
        <div className="signin">
          <Link to="/login">Kirish</Link>
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

export default Signup;
