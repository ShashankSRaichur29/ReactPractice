import React,{useState} from "react";
 // state in functional components, state is defined using state hook

 function Es2(props){
    // const [state,handler] = useState(initial Values)

    const [num,setNum] = useState(0)
    const [age,setAge] = useState(10)
    const [name,setName] = useState("John")

    const addValue = (val) => {
        setNum(num + val)
    }

    const ageHandler = () => {
        setAge(age + 1)
    }
    return(
        <div>
            <h2>States in Functional components</h2>
            <h4>Number = {num} </h4>
           
            <hr />
            <button onClick={()=> addValue(10)}>Add 10</button>
            <button onClick={()=> addValue(100)}>Add 100</button>
            <button onClick={()=> addValue(400)}>Add 400</button>
            <button onClick={()=> addValue(600)}>Add 600</button>
            <button onClick={()=> addValue(900)}>Add 900</button>
            <button onClick={()=> addValue(1000)}>Add 1000</button> 
            <hr />

            <h4>Name = {name} and age is {age} years </h4>
        </div>
    )
 }

 export default Es2