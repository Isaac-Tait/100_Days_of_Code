import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            restrictions: {
                Vegan: false,
                glutenFree: false,
                lowFodMap: false,
                Kosher: false

            }
            
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
    
    handleChange(event) {    
      const {name, value, type, checked} = event.target
      type === "checkbox" ? 
      this.setState({
        [name]: checked
      })
      :
      this.setState({
        [name]: value
      })
    }
    
    render() {
        return (
            <main>
                <form>
                    <input 
                        onChange={this.handleChange}
                        type="text" 
                        name="firstName" 
                        placeholder="First Name"
                        value={this.state.firstName}
                    /><br />
                    <input 
                        onChange={this.handleChange}
                        type="text" 
                        name="lastName"
                        placeholder="Last Name"
                        value={this.state.lastName}
                    /><br />
                    <input 
                        onChange={this.handleChange}
                        type="text" 
                        name="age"
                        placeholder="Age"
                        value={this.state.age}
                    /><br />
                    <hr />
                    <br />
                    <input 
                        onChange={this.handleChange}
                        type="radio" 
                        name="gender"
                        value="Male"
                        checked={this.state.gender === "Male"}
                    /> Male<br />
                    
                    <input 
                        onChange={this.handleChange}
                        type="radio" 
                        name="gender"
                        value="Female"
                        checked={this.state.gender === "Female"}
                    /> Female<br />
                    <input 
                        onChange={this.handleChange}
                        type="radio" 
                        name="gender"
                        value="Non-Binary"
                        checked={this.state.gender === "Non-Binary"}
                    />Non-binary<br />
                    <hr />
                    <select 
                        value={this.state.destination} 
                        name="destination"
                        onChange={this.handleChange}
                    >
                        <option value="">-- Please Choose A Destination --</option>
                        <option value="Tohoku, Japan">Tohoku, Japan</option>
                        <option value="Jakarta, India">Jakarta, India</option>
                        <option value="Baffin Island">Baffin Island</option>
                        <option value="Inca, Peru">Inca, Peru</option>
                    </select>
                    <br />
                    <hr />
                    <input 
                        type="checkbox" 
                        name="Vegan" 
                        onChange={this.handleChange}
                        checked={this.state.Vegan}
                     />Vegan <br />
                    <input 
                        type="checkbox" 
                        name="glutenFree"
                        onChange={this.handleChange}
                        checked={this.state.glutenFree}
                    />Gluten Free<br />
                    <input 
                        type="checkbox" 
                        name="lowFodMap"
                        onChange={this.handleChange}
                        checked={this.state.lowFodMap}
                    />Low-F.O.D.M.A.P.<br />
                    <input 
                        type="checkbox"
                         name="Kosher"
                        onChange={this.handleChange}
                        checked={this.state.Kosher}
                    />Kosher<br />
                    <br />
                    <hr />
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
                
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <h3>Your dietary restrictions: </h3>
                    <p>Vegan: {this.state.Vegan ? "Yes" : "No"}</p>
                    <p>Gluten Free: {this.state.glutenFree ? "Yes" : "No"}</p>
                    <p>Low-F.O.D.M.A.P.: {this.state.lowFodMap ? "Yes" : "No"}</p>
                    <p>Kosher: {this.state.Kosher ? "Yes" : "No"}</p>
            </main>
        )
    }
}

export default App
