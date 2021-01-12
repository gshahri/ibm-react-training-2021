import { Component } from 'react';

class Greeter extends Component{
    //State
    state = {
        message : 'Default greet message',
        userName : ''
    };

    //UI Behavior
    onTxtUserNameChange = (evt) => {
        //evt.target => reference to the DOM node that triggered the event
        this.setState({ userName : evt.target.value });
    };

    onBtnGreetClick = () => {
        const { userName } = this.state;
        //const userName = this.state.userName;
        const { greetTemplate } = this.props;
        this.setState({ message : `Hi ${userName}, ${greetTemplate}`});
    };

    //Presentation
    render(){
        return (
            <div>
                <h1>Greeter</h1>
                <hr/>
                <label htmlFor="">User Name :</label>
                <input type="text" onChange={this.onTxtUserNameChange}/>
                <input type="button" value="Greet" onClick={this.onBtnGreetClick} />
                <div className="highlight">{this.state.message}</div>
            </div>
        )
    }
}

export default Greeter;