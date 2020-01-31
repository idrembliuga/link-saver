import React, { useState, useEffect, useContext } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { AuthContext } from "../Context/context";
const AuthPage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  const changehandler = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const registerHandler = async () => {
    try {
      const data = await request("api/auth/register", "POST", { ...form });
      message(data.message);
    } catch (e) {}
  };
  const loginHandler = async () => {
    try {
      const data = await request("api/auth/login", "POST", { ...form });
      auth.login(data.token, data.userId);
      message(data.message);
    } catch (e) {}
  };

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Link Reducer</h1>
        <div className="card  indigo darken-2" style={{ borderRadius: 30 }}>
          <div className="card-content white-text">
            <span className="card-title">Authentication</span>
            <div>
              <div className="row">
                <div className="input-field ">
                  <input
                    style={{ borderRadius: 10, input: { marginRight: 20 } }}
                    name="email"
                    id="email"
                    type="email"
                    className="validate"
                    placeholder="enter your email"
                    onChange={changehandler}
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field ">
                  <input
                    style={{ borderRadius: 10 }}
                    name="password"
                    id="password"
                    type="password"
                    className="validate"
                    placeholder="enter your password"
                    onChange={changehandler}
                  />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
            </div>
          </div>
          <div className="card-action" style={{ borderRadius: 30 }}>
            <button
              className="btn yellow darken-4"
              style={{ marginRight: 10, marginLeft: 20, borderRadius: 20 }}
              disabled={loading}
              onClick={loginHandler}
            >
              Log in
            </button>
            <button
              style={{ borderRadius: 20 }}
              className="btn grey whiten-1 black-text"
              onClick={registerHandler}
              disabled={loading}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
