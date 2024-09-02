import React from "react";
import './Login.css';



function Login() {
    return(
        <div className="parentDiv">
            <div className="childDiv">
                <form>
                    <label>Username</label>
                    <br/>
                    <input  className="input" type="text" name="username" id="" required></input>
                    <br/>
                    <label>Email</label>
                    <br />
                    <input className="input" type="email" id="" name="email"  />
                    <br />
                    <br />
                    
                    <button>Login</button>
                    
                </form>
            </div>
        </div>
    )
}
export default Login;