import React from "react";
import { useState } from "react";
import validate from "./Validation";
import s from "./form.module.css";

export default function Form(props) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors(
      validate({
        ...userData,
        [name]: value,
      })
    );
  };

  const handleSubmit = () => {
    props.login(userData);
  };

  return (
      <div style={{ padding: "140px" }}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="" className={s.fuente}>
              Username:
            </label>
            <input
              name="username"
              type="text"
              value={userData.name}
              onChange={handleInputChange}
              placeholder="Type a username..."
              className={s.inputuser}
            />
            <p className={s.error}>
              {errors.username ? errors.username : null}
            </p>
          </div>

          <div>
            <label htmlFor="" className={s.fuente}>
              Password:
            </label>
            <input
              name="password"
              type="password"
              value={userData.password}
              onChange={handleInputChange}
              placeholder="Type a password..."
              className={s.inputpass}
            />
            <p className={s.error}>
              {errors.password ? errors.password : null}
            </p>
          </div>

          <button type="submit" className={s.button}>
            Login
          </button>
        </form>
      </div>
  );
}