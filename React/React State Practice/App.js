import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        return (
            <div>
                <h1>You are currently logged {this.state.isLoggedIn == true ? "in" : "out" }</h1>
            </div>
        )
    }
}

export default App

// Bob Ziroll's solution:

import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
    }
    
    render() {
        let wordDisplay
        if (this.state.isLoggedIn) {
            wordDisplay = "in"
        } else {
            wordDisplay = "out"
        }
        return (
            <div>
                <h1>You are currently logged {wordDisplay}</h1>
            </div>
        )
    }
}

export default App
