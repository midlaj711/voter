import React from "react";
import './Hom.css';

function Hom() {
    return(
        <div className="parentDiv">
            <div className="childDiv">
                <span className="login">
                <button className="loginBtn">Login</button>
                </span>
               <span className="signup">
                <button className="signupBtn">Signup</button>
                </span>
               
            </div>

        </div>
    )
}

export default Hom ;