import React, { useEffect, useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState();

  const onSubmit = () => {
    console.log({ email, password });

    // Глобалды объект
    // setItem - ақпаратты браузердің жадысына салу үшін керек
    // getItem - ақпаратты жадыдан алу үшін
    // removeItem - ақпаратты жадыдан өшіріп тастау үшін
    // length
    // clear() - жадыны толық тазарту үшін
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    // Перезагрузка страницы
    window.location.reload();
  };

  useEffect(() => {
    const e = localStorage.getItem("email");
    const p = localStorage.getItem("password");

    if (e && p) {
      //   alert("Welcome, " + e);
      setUser({ email: e, password: p });
    }
  }, []);

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return user ? (
    <div>Welcome, {user?.email}</div>
  ) : (
    <div style={{ margin: "100px auto", width: "max-content" }}>
      <div style={{ marginBlock: "1rem" }}>
        <div>
          <label>Enter your email:</label>
        </div>
        <input type="email" value={email} onChange={onEmailChange} />
      </div>
      <div style={{ marginBlock: "1rem" }}>
        <div>
          <label>Enter your password:</label>
        </div>
        <input type="password" value={password} onChange={onPasswordChange} />
      </div>
      <div>
        <button type="submit" onClick={onSubmit}>
          Login
        </button>
      </div>
    </div>
  );
};
