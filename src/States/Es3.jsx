import React, { useState } from "react";

function Es3(props){
    const [color,setColor] = useState(" ")

    const gerenrateColor = () => {
        setColor(Math.random().toString(16).substr(-6))
    }

    return(
        <div>
            <h1>React State</h1>
            <button onClick={gerenrateColor}>Generate Random Color</button>
            <div style={{width: " 200px" , height: "200px",backgroundColor: `#${color}`}}>
                <p>random Color</p>
            </div>
        </div>
    )
}

export default Es3