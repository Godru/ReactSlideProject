import React, { Component } from 'react';
import '../App.css';

class Circle extends Component {
    constructor(props){
        super(props);
        this.state = {
            size: this.props.size,
            className: this.props.className
        }
    }
    render() {
        return (
            <div className={"Circle__outer " + this.state.className}
                style = {{
                    borderWidth: this.state.size/15,
                    width: this.state.size - this.state.size/17*2,
                    height: this.state.size - this.state.size/17*2
            }} ><div className="Circle__moving"
                style ={{
                    borderWidth: this.state.size/30,
                    width: this.state.size - this.state.size/17*2,
                    height: this.state.size - this.state.size/17*2
            }}/><div className="Circle__moving moving_1"
                style ={{
                    borderWidth: this.state.size/30,
                    width: this.state.size - this.state.size/17*2,
                    height: this.state.size - this.state.size/17*2
            }}/></div>
        );
    }
}

export default Circle;