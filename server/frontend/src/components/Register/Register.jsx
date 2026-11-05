import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registeruser = async (e) => {
    e.preventDefault();
    let register_url = window.location.origin + "/djangoapp/register";

    const res = await fetch(register_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      }),
    });

    const json = await res.json();
    if (json.status === "Authenticated") {
      sessionStorage.setItem("username", json.userName);
      window.location.href = window.location.origin;
    } else if (json.error) {
      alert(json.error);
    }
  };

  return (
    <div className="register_container" style={{ width: "50%", margin: "auto", marginTop: "5%" }}>
      <div className="header" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <span className="text" style={{ fontSize: "36px", fontWeight: "700" }}>Sign Up</span>
        <div className="underline" style={{ width: "61px", height: "6px", background: "#3c009d", borderRadius: "9px" }}></div>
      </div>
      <form onSubmit={registeruser} className="inputs" style={{ marginTop: "20px" }}>
        <div className="input" style={{ marginBottom: "15px" }}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="input_field"
            onChange={(e) => setUserName(e.target.value)}
            required
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
          />
        </div>
        <div className="input" style={{ marginBottom: "15px" }}>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            className="input_field"
            onChange={(e) => setFirstName(e.target.value)}
            required
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
          />
        </div>
        <div className="input" style={{ marginBottom: "15px" }}>
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            className="input_field"
            onChange={(e) => setLastName(e.target.value)}
            required
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
          />
        </div>
        <div className="input" style={{ marginBottom: "15px" }}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input_field"
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
          />
        </div>
        <div className="input" style={{ marginBottom: "15px" }}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input_field"
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
          />
        </div>
        <div className="submit_container" style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <button type="submit" className="btn btn-primary" style={{ padding: "10px 30px", fontSize: "18px" }}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
