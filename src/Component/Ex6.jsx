import React, {Component} from "react";

let x =12;
let y=34;

let str="Welcome to string";
let view = true;

let colors = ["red","green","blue"];

let user = {
    id:1,
    name:"John",
    age:23,
    city:"Bangalore"
}

class Ex6 extends Component{
    constructor(props){
        super(props)
        this.a = 2;
        this.b = 5;
        this.str1 = "Shasahnk";
        this.booo=true;
        this.fruits=["Orange","Apple","Kiwi"];
        this.stud={
            uid : 1421,
            name: "Ram",
            marks: 98,
            class: "10th" 
        }
    }

    render(){
        return(
            <div>
            <h1>Data Binding in Class function Component</h1>
            <h2> x= {x}</h2>
            <h2> y= {y}</h2>
            <h2>Product = {x*y}</h2>
            <hr />
            <h2>String = {str}</h2>
            {/* to print boolean value hav to use ternary operator */}
            <h2>Boolean = {view ? "Hello world":"Sorry"}</h2>
            <hr />
            <h2>user id = {user.id}, name = {user.name}, age = {user.age}, and city = {user.city}</h2>
            <hr />
            <ol>
                {
                    colors.map((item,index) => {
                        return(
                            <li key={index}>{item}</li>
                        )
                    })
                }
            </ol>
            <hr />
            <h2>Local Variable using this keyword</h2>
            <h2>Product of Local Variables = {this.a*this.b}</h2>
            <h2>String value = {this.str1}</h2>
            <h2>Boolean value ={this.booo ? "True":"False"}</h2>
            <h2>Students Info  Id = {this.stud.uid}, Name = {this.stud.name}, Marks = {this.stud.marks}, and Class = {this.stud.class}</h2>
            <ol>
             {this.fruits.map((item, index) => {
                 return(<h2><li key={index}>{item}</li></h2>)
            })}
            </ol>
            <hr />
        </div>
        )
    }
}

export default Ex6