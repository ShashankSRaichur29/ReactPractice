import React,{Component} from "react";

class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            num : 0
        }
    }

    incHandler(){
        this.setState({
            num : this.state.num + 1
        })
    }

    decHandler(){
        if(this.state.num <= 0){
            this.setState({
                num : 0
            })
        }else{this.setState({
            num: this.state.num - 1
        })
    }
    }

    render(){
        return(
            <div>
                <h1>Counter</h1>
                <h2>Number = {this.state.num}</h2>
                <button onClick={() => this.incHandler()}>Increament</button>
                <button onClick={() => this.decHandler()} disabled={this.state.num <= 0 ? true:false}>Decreament</button>
                
            </div>
        )
    }
}

export default Counter