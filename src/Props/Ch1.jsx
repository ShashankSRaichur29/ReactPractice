import React, {Component} from "react";

class Ch1 extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1>Ch1 Component</h1>
                <h1>Num = {this.state.num}</h1>

                <button></button>
            </div>
        )
    }
}

export default Ch1
