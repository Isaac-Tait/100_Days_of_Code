import React from "react"

function Jokes(props) {
    return (
        <div>
            <h3 style={{display: props.question ? "block" : "none"}}>Question: </h3> <p>{props.question}</p>
            <h3 style={{display: props.question ? "block" : "none"}}>Punchline: </h3> <p>{props.punchline}</p>
        </div>
    )
}

export default Jokes