import React, {Component} from "react";

class Ex2 extends Component{
    constructor(props){
        super(props)
        this.state = {
            num : 0
        }
        this.incVal = this.incVal.bind(this)
    }

    incVal(val){
        this.setState({
            num : val
        })
    }

    render(){
        return(
            <div>
                <h1>Props in Class Component</h1>
                <Ch1 num={this.state.num} clickHandler={this.incVal}></Ch1>
            </div>
        )
    }
}

export default Ex2
