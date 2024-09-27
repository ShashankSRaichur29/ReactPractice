import React from "react";

//  Global Variable can use only let and const
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


function Ex4(props){
    return(
        <div>
            <h1>Variables in Functional Component</h1>
            <hr />
            {/* {data binding} */}
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
        </div>
    )
}


export default Ex4