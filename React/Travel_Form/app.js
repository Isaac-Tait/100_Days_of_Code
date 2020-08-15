import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "Tohoku, Japan",
            restrictions: ""
            
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleSubmit() {
        alert("Your flight information is the following: " 
            + this.state.firstName 
            + this.state.age 
            + this.state.gender 
            + this.state.destination 
            + this.state.restrictions 
        );
        event.preventDefault();
    }
    
    handleChange() {    
        this.setState({value: event.target.value});  
    }
    
    render() {
        return (
            <main>
                <form>
                    <input 
                        onChange={handleChange}
                        type="text" 
                        name="firstName" 
                        value={this.state.firstName}
                    />
                    <br />First Name<br />
                    
                    <input 
                        onChange={handleChange}
                        type="text" 
                        name="lastName"
                        value={this.state.lastName}
                    />
                    <br />Last Name<br />
                    
                    <input 
                        onChange={handleChange}
                        type="text" 
                        name="age"
                        value={this.state.age}
                    />
                    <br />Age< br/>
                    
                    <input 
                        type="radio" 
                    
                    /><p>Male</p>
                    <br />
                    <input 
                        type="radio" 
                    
                    /><p>Female</p>
                    <input 
                        type="radio" 
                    
                    /><p>Non-binary</p>
                    <select value={this.state.destination} onChange={handleChange}>
                        <option value="Tohoku, Japan">Tohoku, Japan</option>
                        <option value="Jakarta, India">Jakarta, India</option>
                        <option value="Baffin Island">Baffin Island</option>
                        <option value="Inca, Peru">Inca, Peru</option>
                    </select>
                    <br />
                    
                    <input 
                        type="checkbox" 
                        value="Vegan" 
                        onChange={handleChange}
                     /><p>Vegan</p>
                    <input 
                        type="checkbox" 
                        value="Gluten-Free"
                        onChange={handleChange}
                    /><p>Gluten Free</p>
                    <input 
                        type="checkbox" 
                        value="Low-F.O.D.M.A.P."
                        onChange={handleChange}
                    /><p>Low-F.O.D.M.A.P.</p>
                    <input 
                        type="checkbox"
                         value="Kosher"
                        onChange={handleChange}
                    /><p>Kosher</p>
                    <br />
                    
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
                
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions: 
                    {this.state.restrictions}
                </p>
            </main>
        )
    }
}

export default App
