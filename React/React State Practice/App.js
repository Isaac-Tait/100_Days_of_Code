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

// Once from scratch from memory 
import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        let userStatus
        if(this.state.isLoggedIn == true) {
            userStatus = "In"
        } else {
            userStatus = "Out"
        }
        return (
            <div>
                <h2>You are currently logged</h2><h1>{userStatus}</h1>
            </div>
        )
    }
}

export default App
