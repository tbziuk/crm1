import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Home from "../views/Home";
import Main from "../views/Main";
import SignUp from "../views/userViews/Signup";
import Login from "../views/userViews/Login";

const AppRoutes = (props) => {

    const [errors, setErrors] = useState([]);

    return (
        <Routes>
            <Route path="/" element={<Home token={props.token} />} />
            <Route path="/add/*" element={<Main token={props.token} errors={errors} setErrors={setErrors} />} />
            <Route path="/signup/" element={<SignUp token={props.token} errors={errors} setErrors={setErrors}  />} />
            <Route path="/login/" element={<Login setToken={props.setToken} errors={errors} setErrors={setErrors}  />} />
        </Routes>
    )
}
export default AppRoutes;