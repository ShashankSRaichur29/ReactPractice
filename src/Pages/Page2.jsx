import React from "react";

const Counter = (props) => {
    return(
        <div>
            <h1>Counter</h1>
        </div>
    )
}

const End = (props) =>{
    return(
        <div>
            <h1>End Counting</h1>
        </div>
    )
}

const Page2 = function(props){
    let view = false
    return(
        <div>
            <h1>Conditional using ternanry operator</h1>
            <div>
                {
                    view?<Counter/>:<End/>
                }
            </div>
        </div>

    )
}

export default Page2