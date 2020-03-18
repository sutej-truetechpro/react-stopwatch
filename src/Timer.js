import React from "react";
import * as moment from 'moment'
import './Timer.css'

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: '',
            handler: ''
        };
        this.time = '';
        this.updateTime = this.updateTime.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.resumeTimer = this.resumeTimer.bind(this);
    }
    componentDidMount() {
        console.log('mounted');
    }

    startTimer() {
        this.time = new Date('2000-01-01 00:00:00');
        this.updateTime();
        this.state.handler = setInterval(this.updateTime, 1000 );
    }
    pauseTimer() {
        clearInterval(this.state.handler);
        this.setState({handler: false});
    }
    resumeTimer() {
        this.state.handler = setInterval(this.updateTime, 1000 );
    }
    stopTimer() {
        clearInterval(this.state.handler);
        this.setState({handler: false});
        this.setState({timer: ''});
        console.log(this.handler)
    }
    updateTime() {
        console.log('sd');
        let newTime = this.time.setSeconds(this.time.getSeconds() + 1);
        this.setState({timer: moment(newTime).format('mm:ss')});
    }

    render() {
        return (
            <div>
                <div className={'heading'}>Stop Watch</div>
                <button disabled={this.state.handler} onClick={this.startTimer}>Start Timer</button>
                <button disabled={!this.state.handler} onClick={this.pauseTimer}>Pause Timer</button>
                <button disabled={this.state.handler} onClick={this.resumeTimer}>Resume Timer</button>
                <button disabled={!this.state.handler} onClick={this.stopTimer}>Stop Timer</button>
                <div className={'timer'}>{this.state.timer}</div>
            </div>
        );
    }
}
