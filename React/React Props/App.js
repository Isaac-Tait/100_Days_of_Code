import React from "react"
import Jokes from "./components/Jokes.js"
import LineBreak from "./components/LineBreak.js"

function App() {
    return (
        <div>
            <Jokes 
                punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
            />
            <LineBreak />
            <Jokes 
                question="Why did the chicken cross the road?" punchline="Because" />
            <LineBreak />
            <Jokes 
                question="asdfasdf" punchline="fsadfsdfasdf" />
            <LineBreak />
            <Jokes 
                question="asdfasdf" punchline="fsadfsdfasdf"
            />
            <LineBreak />
            <Jokes 
                question="asdfasdf" punchline="fsadfsdfasdf"
            />
            <LineBreak />
            <Jokes 
                question="" punchline="fsadfsdfasdf"
            />
        </div>
    )
}

export default App