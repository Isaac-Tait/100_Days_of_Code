import React from "react"

import map2 from "./map2.js"

function App() {
    const jokeComponent = map2.map(joke => <Joke key={} question={} punchLine={} />)

    return (
        <div>
            {jokeComponent}
        </div>
    )
}

export default App