import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.updateState = this.updateState.bind(this)
    }
    
    updateState() {
            this.setState(prevState => {
                return {
                    isLoggedIn: !prevState.isLoggedIn
                }
            })
        }
    
    render() {
        return (
            <div>
                <h3>The user IsaacT8 is </h3> {this.state.isLoggedIn ? <p>Logged In</p> : <p>Logged Out</p>}
                <button onClick={this.updateState}>{this.state.isLoggedIn ? "Log Out" : "Log In"}</button>
            </div>
        )   
    }
}

export default App

// Instructors Solution

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }
    
    render() {   
        let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
        let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out"
        return (
            <div>
                <button onClick={this.handleClick}>{buttonText}</button>
                <h1>{displayText}</h1>
            </div>
        )
    }
}

export default App