import React, { useState } from "react";
import { onLogin } from "../api/auth";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../redux/slices/authSlice";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch()
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await onLogin(values)
      dispatch(authenticateUser())
      setError('')
      localStorage.setItem('isAuth','true')
    } catch (error) {
      console.log(error.response.data.errors);
      setError(error.response.data.errors[0].msg)
      setSuccess('');
    }
    
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <h1>Login</h1>
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
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
