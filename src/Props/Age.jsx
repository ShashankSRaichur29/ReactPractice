import React, {Component} from "react";

class Age extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1>Age Component</h1>
                <h3>Age of a user = {this.props.a}</h3>
                <h3>Age of b user = {this.props.b}</h3>
            </div>
        )
    }
}

export default Age
