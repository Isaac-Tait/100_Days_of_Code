import React from "react"

class MemeGen extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            img: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange() {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                console.log(memes[0])
                this.setState({
                    allMemeImgs: memes
                })
            })
    }

    render() {
        return (
            <div>
                <form className="meme-form">
                    <input
                        onChange={this.handleChange}
                        type="text"
                        name="topText"
                        value={this.state.topText}
                    />Top Text
                    <br />
                    <input
                        onChange={this.handleChange}
                        type="text"
                        name="bottomText"
                        value={this.state.bottomText}
                    />Bottom Text
                    <br />
                    {
                        /**
                         * Create 2 input fields, one for the topText and one for the bottomText
                         * Remember that these will be "controlled forms", so make sure to add
                         * all the attributes you'll need for that to work
                         */
                    }    
                
                    <button>Gen</button>
                </form>
            </div>
        )
    }
    
}

export default MemeGen