import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";
import { useForm } from '../../hooks/useForm'
export const LoginScreen = () => {

  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const [formValues, handleInputChange] = useForm({
    username: '',
    password: ''
  })

  const { username, password } = formValues;

  const { dispatch } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    fetch('http://localhost:4000/api/v1/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: username,
        password: password
      })
    }).then((res) => res.json()).then((res) => {
      const { status, msg } = res;
      if (status === 'error') {
        setErrorMessage(msg);
        console.log(msg);
        return;
      }
      setErrorMessage('');
      const action = {
        type: types.login,
        payload: {
          name: username,
        },
      };
      dispatch(action);
      const lastPath = localStorage.getItem("lastPath") || "/marvel";
      navigate(lastPath, {
        replace: true,
      });
    })


  };
  return (
    <div style={{ backgroundImage: `url('https://images.hdqwalls.com/wallpapers/marvel-vs-dc-1u.jpg')`, width: "100vw", height: "100vh", backgroundSize: "cover", position: "relative" }}>
      <div className="container mt-5 w-25" style={{ display: "block", textAlign: "center", backgroundColor: "white", borderRadius: "5px", position: "absolute", top: "35%", left: "40%" }} >
        <h1>Login</h1>
        <hr />{
          errorMessage && (<div className="alert alert-danger">{errorMessage}</div>)
        }
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Your username"
            className="form-control"
            name="username"
            value={username}
            autoComplete="off"
            onChange={handleInputChange}
          />

          <input
            type="password"
            name="password"
            placeholder="*******"
            className="form-control mt-3"
            value={password}
            autoComplete="off"
            onChange={handleInputChange}
          />
          <button className="btn btn-primary mt-3 mb-3" type="submit">
            Login
          </button>
          <div className="mb-3"> <Link to="/register">Create an account</Link></div>

        </form>

      </div>
    </div>
  );
};
