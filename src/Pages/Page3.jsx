import React, {Component} from "react";

class Login extends Component{
    constructor(props){
        super(props)
    }
    render(){
       return(<div>
        <h1>Login</h1>
    </div>) 
    }
}

class Register extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<div>
            <h1>Register</h1>
        </div>)
        
    }
}

class Page3 extends Component{
    constructor(props){
        super(props)
        this.view = true
        this.content =" "
    }
    render(){
        if(this.view){
            this.content = <Login/>
        }else{
            this.content = <Register/>
        }
        return(
            <div>
                <h1>Conditionals in class component</h1>
                <div>
                    {this.content}
                </div>
            </div>
        )
    }
}


export default Page3