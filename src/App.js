import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock} from '@fortawesome/free-regular-svg-icons'
import Box_1 from './Components/Box_1.js';
import Box_2 from './Components/Box_2.js';
import Tab_3 from './Components/Tab_3.js';
import Tab_2 from './Components/Tab_2.js';
import Tab_1 from './Components/Tab_1.js';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            timerMin: 10,
            timerSec: '0',
            activeSlide: 1,
            activeTab: 3,
            marginBox: 0,
            transition: '',
            buttonsHide: 980,
            marginTab: -2047,
            marginScroll: 820,
            downButtonActive: 'block',
            controlOpen: true,
            controlSpace:[0,60,120,180],
            controlOpacity: 1,
            swipeStartY: undefined,
            swipeEndY: undefined,
            scroll: false
        };
        this.swipeSlideUp = this.swipeSlideUp.bind(this);
        this.swipeSlideDown = this.swipeSlideDown.bind(this);
        this.scroll = this.scroll.bind(this);
        this.scrollEnd = this.scrollEnd.bind(this);
        this.timerStart = this.timerStart.bind(this);
        this.timer = this.timer.bind(this);
        this.controlOpenClose = this.controlOpenClose.bind(this);
        this.swipeSlideStart = this.swipeSlideStart.bind(this);
        this.swipeSlide = this.swipeSlide.bind(this);
        this.swipeSlideEnd = this.swipeSlideEnd.bind(this);
        library.add(faClock);
    }
    swipeSlideStart(e){
        this.setState({swipeStartY: e.touches[0].clientY});
    }
    swipeSlide(e){
        this.setState({swipeEndY: e.touches[0].clientY});
    }
    swipeSlideEnd(){
        if((this.state.swipeEndY - this.state.swipeStartY) < -100){
            this.swipeSlideUp();
        }
        if((this.state.swipeEndY - this.state.swipeStartY) > 100){
            this.swipeSlideDown();
        }
        this.setState({swipeEndY: undefined});
        this.setState({swipeStartY: undefined});
    }
    changeSlide(slide,prevState){
        prevState.marginBox = (slide-1)*99;
        (slide === 1 )? prevState.downButtonActive = 'block': prevState.downButtonActive = 'none';
        prevState.activeSlide = slide;
        return prevState
    }
    clickChangeSlide(slide){
        return this.setState(this.changeSlide(slide,this.state))
    }
    sliderColor(number){
        let color;
        (number === this.state.activeSlide) ? color = {borderColor: 'orange'} : color= {borderColor: 'white'};
        return color;
    }
    swipeSlideUp(){
        if(this.state.activeSlide < 3 && this.state.activeTab === 3)
            this.setState(this.changeSlide(this.state.activeSlide + 1,this.state))
    }
    swipeSlideDown(){
        if(this.state.activeSlide > 1 && this.state.activeTab === 3)
            this.setState(this.changeSlide(this.state.activeSlide - 1,this.state))
    }
    scroll(e){
        this.setState({transition:''});
        if(e.touches[0].clientX >= 215 && e.touches[0].clientX <= 820) {
            this.setState({ marginScroll: e.touches[0].clientX});
            if(this.state.marginScroll < 820 && this.state.marginScroll > 650 && this.state.activeTab !== 3) {
                this.setState({ buttonsHide: 980,
                                marginTab: -2046,
                                activeTab: 3});
            }
            if(this.state.marginScroll < 650 && this.state.marginScroll > 400 && this.state.activeTab !== 2){
                this.setState({ buttonsHide: 2000,
                                marginTab: -1024,
                                activeTab: 2});
            }
            if(this.state.marginScroll < 400 && this.state.marginScroll > 215 && this.state.activeTab !== 1){
                this.setState({ buttonsHide: 2000,
                                marginTab: 0,
                                activeTab: 1});
            }
        }
        else if(e.touches[0].clientX < 215) {
            this.setState({marginScroll: 215});
        }
        else if(e.touches[0].clientX > 820){
            this.setState({marginScroll: 820});

        }
    }

    scrollEnd(){
        this.setState({transition:'transition_on'});
        switch(this.state.activeTab){
            case 1: this.setState({ marginScroll: 215,
                                    widthScrollWhite: 20,
                                    widthScrollBlack: 610});
                    break;
            case 2: this.setState({ marginScroll: 540,
                                    widthScrollWhite: 330,
                                    widthScrollBlack: 290});
                    break;
            case 3: this.setState({ marginScroll: 820,
                                    widthScrollWhite: 610,
                                    widthScrollBlack: 20});
                    break;
        }
    }

    componentDidMount(){
       this.timerStart();

    }
    timerStart() {
        setInterval(this.timer,1000);

    }
    timer(){
        if(this.state.timerSec.valueOf() -1  === -1){
            if(this.state.timerMin -1 === -1){
                this.setState({timerMin: 9});
            }
            else {
                this.setState({timerMin: this.state.timerMin - 1});
            }
            this.setState({timerSec: '59'});
        }
        else
            this.setState({timerSec: this.state.timerSec.valueOf()-1});
        if(this.state.timerSec.valueOf() < 10 && this.state.timerSec.valueOf() >=0){
            this.setState({timerSec: '0' + this.state.timerSec});
        }
    }
    controlOpenClose(){
        if(this.state.controlOpen) {
            this.setState({
                controlOpacity: 0,
                controlSpace: [300, 300, 300, 300],
                controlOpen: false
            });
        }
        else{
            this.setState({
                controlOpacity: 1,
                controlSpace: [0, 60, 120, 180],
                controlOpen: true
            });
        }

    }
    render() {
    return (
        <div onTouchStart={this.swipeSlideStart} onTouchEnd={this.swipeSlideEnd} onTouchMove={this.swipeSlide} className="App">
            <Box_2 margin ={this.state.marginBox} activeSlide ={this.state.activeSlide}/>
            <Box_1 activeSlide ={this.state.activeSlide}/>
            <div className="Tabs__view">
                <div style={{left: this.state.buttonsHide}} className="slide__buttons">
                    <button onClick={(e) => this.clickChangeSlide(1)} style = {this.sliderColor(1)} className="Slide_Button"/>
                    <button onClick={(e) => this.clickChangeSlide(2)} style = {this.sliderColor(2)} className="Slide_Button"/>
                    <button onClick={(e) => this.clickChangeSlide(3)} style = {this.sliderColor(3)} className="Slide_Button"/>
                </div>
                <div className="scroll__line">
                    <div style={{width: this.state.marginScroll - 200}} className={"scroll__line_white " + this.state.transition}/>
                    <div style={{width: 630 - this.state.marginScroll + 200}} className={"scroll__line_black " + this.state.transition}/>
                </div>
                <div style = {{left: this.state.marginScroll-20, position: 'absolute'}} onTouchEnd={this.scrollEnd} onTouchMove={this.scroll} className={"scroll__tab " + this.state.transition}/>
                <div className="scroll__text_1">1988</div>
                <div className="scroll__text_2">2009</div>
                <div className="scroll__text_3">2016</div>
                <div style ={{left: this.state.marginTab}} className="Tabs__list">
                    <Tab_1/><Tab_2/><Tab_3/>
                </div>
            </div>
            <button onClick={(e) => this.clickChangeSlide(3)} style = {{display: this.state.downButtonActive}} className="down__button"/>
            <div className="control__buttons">
                <button className="control__button button_1" style={{top: this.state.controlSpace[0],opacity: this.state.controlOpacity}}><div className="camera__block_1"/><div className="camera__block_2"/><div className="camera__block_3"/><div className="camera__block_4"/><div className="camera__block_5"/></button>
                <button className="control__button button_2" style={{top: this.state.controlSpace[1],opacity: this.state.controlOpacity}}><div className="cancel__block_1"/><div className="cancel__block_2"/></button>
                <button className="control__button button_3" style={{top: this.state.controlSpace[2],opacity: this.state.controlOpacity}}><div className="confirm__block_1"/><div className="confirm__block_2"/></button>
                <button className="control__button button_4" style={{top: this.state.controlSpace[3],opacity: this.state.controlOpacity}}><div className="pause__block_1"/><div className="pause__block_2"/></button>
                <div className="control__panel">
                    <button className="control__open" onClick={this.controlOpenClose}>...</button>
                    <div className="control__timer"><FontAwesomeIcon className='clock' icon={faClock}/>{this.state.timerMin}:{this.state.timerSec}</div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
