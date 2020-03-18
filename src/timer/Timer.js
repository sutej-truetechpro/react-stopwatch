import React from "react";
import * as moment from 'moment'
import './Timer.scss'

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: '',
            handler: '',
            splitArr: []
        };
        this.time = '';
        this.updateTime = this.updateTime.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.resumeTimer = this.resumeTimer.bind(this);
        this.split = this.split.bind(this);
    }

    startTimer() {
        this.setState({splitArr: []});
        this.time = new Date('2000-01-01 00:00:00');
        this.updateTime();
        this.setState(
            {handler: setInterval(this.updateTime, 100)}
        );
    }

    pauseTimer() {
        clearInterval(this.state.handler);
        this.setState({handler: false});
    }

    resumeTimer() {
        this.setState(
            {handler: setInterval(this.updateTime, 100)}
        );
    }

    stopTimer() {
        clearInterval(this.state.handler);
        this.setState({
            handler: false,
            timer: ''
        });
    }

    updateTime() {
        let newTime = this.time.setMilliseconds(this.time.getMilliseconds() + 100);
        this.setState({timer: moment(newTime).format('mm:ss:SSS')});
    }

    split() {
        let arr = this.state.splitArr;
        arr.push(this.state.timer);
        this.setState({splitArr: arr});
        console.log('timer', this.state.splitArr);
    }

    render() {
        const items = [];

        for (const [index, value] of this.state.splitArr.entries()) {
            items.push(
                <form>
                    <div className="form-group row mx-auto m-2">
                        <label className="col-sm-2 col-form-label">{value}</label>
                        <span className="col-sm-1"/>
                        <div className="col-sm-8">
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                </form>
            )
        }
        return (
            <div>
                <div className={'heading'}>Stop Watch</div>
                <button disabled={this.state.handler} onClick={this.startTimer}>{'Start'} Timer</button>
                <button onClick={this.split}>Split</button>
                {/*<button disabled={!this.state.handler} onClick={this.pauseTimer}>Pause Timer</button>*/}
                {/*<button disabled={this.state.handler} onClick={this.resumeTimer}>Resume Timer</button>*/}
                <button disabled={!this.state.handler} onClick={this.stopTimer}>Stop Timer</button>
                <div className={'timer'}>{this.state.timer}</div>
                {this.state.splitArr.length > 0 ? <div className={'comment-box'}>{items}</div> : null}
            </div>
        );
    }
}
