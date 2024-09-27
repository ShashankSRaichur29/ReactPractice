import React from "react";

//Child Components
function Login(props){
    return(
        <div>
            <h3>Login Here</h3>
            <form>
                <div>
                    <label htmlFor="user">Username</label>
                    <input type="text" name="user" id="user" required />
                </div>
                <div>
                    <label htmlFor="user">Password</label>
                    <input type="password" name="pass" id="pass" required />
                </div>
                <div>
                    <input type="button" value="Submit" />
                </div>
            </form>
        </div>
    )
}

function Register(props){
    return(
        <div>
            <h3>Register Here</h3>
            <form>
                <div>
                    <label htmlFor="user">Username</label>
                    <input type="text" name="user" id="user" required />
                </div>
                <div>
                    <label htmlFor="pass">Password</label>
                    <input type="password" name="pass" id="pass" required />
                </div>
                <div>
                    <label htmlFor="cpass">Confirm Password</label>
                    <input type="password" name="cpass" id="cpass" required />
                </div>
                <div>
                    <input type="button" value="Register" />
                </div>
            </form>
        </div>
    )
}


function Page1(props){
    let view = false
    let content = null
    if (view) {
       content = <Login/>
    }else{
        content = <Register/>
    }
    return(
        <div>
            <h1>Conditionals in functional component</h1>
            <hr />
            <p>using if and else statement</p>
            {
                content
            }
        </div>
    )
}

export default Page1