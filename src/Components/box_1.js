import React, { Component } from 'react';
import '../App.css';

class Box_1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topDefault: [50, 350, 185, 600, 240],
            top: [250, 550, 385, 800, 440]
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({top: this.state.topDefault.map(function (top) {
            return top-200*(nextProps.activeSlide-2);
        })});

    }

    render() {
        return (
            <div className="Box_1">
                <div style ={{top: this.state.top[0]}} className="iceblock1"/>
                <div style ={{top: this.state.top[1]}} className="iceblock2"/>
                <div style ={{top: this.state.top[2]}} className="iceblock3"/>
                <div style ={{top: this.state.top[3]}} className="iceblock4"/>
                <h1 style ={{top: this.state.top[4]}} className="Box_1__title">Основа терапии —патогенез СД2</h1>
            </div>
        );
    }
}

export default Box_1;