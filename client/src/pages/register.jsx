import React, { useState } from "react";
import { onRegistration } from "../api/auth";

const Register = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await onRegistration(values);
      setError("");
      setSuccess(data.message);
      // setValues({
      //   email: "",
      //   password: "",
      // });
    } catch (error) {
      console.log(error.response.data.errors);
      setError(error.response.data.errors[0].msg)
      setSuccess('');
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <h1>Register</h1>
      <input
        type="email"
        name="email"
        onChange={(e) => onChange(e)}
        placeholder="email"
      />
      <input
        type="password"
        name="password"
        onChange={(e) => onChange(e)}
        placeholder="password"
      />
      {error}
      {success}
      <button type="submit">register</button>
    </form>
  );
};

export default Register;
