import React, { Component } from 'react';
import Circle from './Circle.js'
import '../App.css';

class Box_2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            margin: 0,
            top:[426,538,260,518,105,398,505,275,487],
            topDefault:[426,538,260,518,105,398,505,275,487]
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            margin: nextProps.margin,
            top: this.state.topDefault.map(function (top) {
                return top-200*(nextProps.activeSlide-1);
            })
        });
    }


    render() {
        return (
            <div style = {{marginTop: -this.state.margin + "vh"}} className="Box_2">
                <Circle top = {this.state.top[0]} className ="circle_1" size="30"/>
                <Circle top = {this.state.top[1]} className ="circle_2" size="15"/>
                <Circle top = {this.state.top[2]} className ="circle_3" size="55"/>
                <Circle top = {this.state.top[3]} className ="circle_4" size="15"/>
                <h1 style = {{top: this.state.top[4]}} className="Box_2__title">Всегда ли цели терапии СД2
                    на поверхности?</h1>
                <div style = {{top: this.state.top[5]}} className="Box_2__text_1">Гипогликемия</div>
                <div style = {{top: this.state.top[6]}} className="Box_2__text_2">Осложнения СД</div>
                <div style = {{top: this.state.top[7]}} className="Box_2__text_3">Цель по HbA1c</div>
                <div style = {{top: this.state.top[8]}} className="Box_2__text_4">СС риски</div>
            </div>
        );
    }
}

export default Box_2;