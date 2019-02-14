import React, { Component } from 'react';
import Circle from './Circle.js'
import '../App.css';

class Box_2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            margin: 0
        }

    }
    componentWillReceiveProps(nextProps){
        this.setState({margin: nextProps.margin})
    }


    render() {
        return (
            <div style = {{marginTop: -this.state.margin + "vh"}} className="Box_2"><Circle className ="circle_1" size="20"/><Circle className ="circle_2" size="15"/><Circle className ="circle_3" size="55"/><Circle className ="circle_4" size="15"/></div>
        );
    }
}

export default Box_2;