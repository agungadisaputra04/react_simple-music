import React from "react";
import HeadPhone from '../assets/img/itunes.svg';
import ya from '../assets/img/3tr.png';
import './css/Login.scss';
import {Link} from "react-router-dom";

class Login extends React.Component{
    render() {
        return(
            <section id="main">
                    <div className="nav-item">
                        <a className="navbar-brand" href="/"></a>
                    </div>
                    <div className="main-row">
                        <div className="main-row-img">
                            <img className="head-phone-img" src={ya} alt=""/>
                        </div>
                        <div className="main-row-text">
                            <h1>Musik untuk mu sayang</h1>
                            <p>Kamu adalah cintaku</p>
                            <Link to={"/home"} className="btn third">
                                Sini beb
                            </Link>
                        </div>
                    </div>
            </section>
        );
    }
}

export default Login;