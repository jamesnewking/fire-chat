import React, { Component } from 'react';

class MessageInput extends Component {
    constructor(props) {
        super(props);
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            this.state = {
                name: user.name,
                color: user.color,
                message: ''
            }
        } else {
            this.state = {
                name: 'Guest',
                color: '#ffffff',
                message: ''
            }
        }
    }




    handleSubmit = (e) => {
        e.preventDefault();
        this.props.send(this.state.message);
        this.setState({ message: '' });
    }

    render(){
        const { message } = this.state;
        return (
            <form className="row" onSubmit={this.handleSubmit}>
                <div className="col s8 offset-s2">
                    <label>New Message from <b style={{color:this.state.color}}>{this.state.name}</b></label>
                    <input type="text" value={message} onChange={ e => this.setState({ message: e.target.value })}/>
                </div>
            </form>
        )
    }
}

export default MessageInput;