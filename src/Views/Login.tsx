// framework
import React from "react";
import { useNavigate } from "react-router-dom";

import '../Styles/Login/Login.css';

const Login: React.FC = () => {
    // gloabl vars
    const navigate = useNavigate();

    function login_btn_click_handler() {
        navigate('/');
    }

    return <div id="login_page_cont">
        <div id="login_form_cont">
            <img src="/images/lt_logo.png" alt="lt_logo" />
            <br />
            <br />
            <br />
            <input type="text" className="login_text" id="login_username" placeholder="Username" />
            <br />
            <input type="password" className="login_text" id="login_password" placeholder="Password" />
            <br />
            <button id="login_btn" onClick={() => login_btn_click_handler()}>Login</button>
        </div>
    </div>;
};

export default Login;