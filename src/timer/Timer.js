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
        this.downloadCSV = this.downloadCSV.bind(this);
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
        arr.push({time: this.state.timer, comment: ''});
        this.setState({splitArr: arr});
        console.log('timer', this.state.splitArr);
    }

    deleteSplit(index) {
        console.log('index', index);
        let arr = this.state.splitArr;
        arr.splice(index, 1);
        this.setState({splitArr: arr})
    }

    downloadCSV() {
        let comments = document.querySelectorAll('.split-row .form-control');
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += 'Time,Comments\r\n';
        let csvLength = this.state.splitArr.length;
        for (let x = 0; x < csvLength; x++) {
            let row = this.state.splitArr[x].time + ',' + this.state.splitArr[x].comment;
            csvContent += row + "\r\n";
        }
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "stop_watch.csv");
        document.body.appendChild(link); // Required for FF

        link.click();
    }

    updateComment(comment, index) {
        let arr = this.state.splitArr;
        arr[index].comment = comment;
        this.setState({splitArr: arr});
        console.log('value', comment)
    }

    render() {
        const items = [];

        for (const [index, value] of this.state.splitArr.entries()) {
            items.push(
                <div className='row split-row align-items-center' key={index}>
                    <div className="col-md-2"><span className='px-2 fa fa-times'
                                                    onClick={() => this.deleteSplit(index)}/></div>
                    <div className="col-md-3 text-left"><span className='px-2'>{value.time}</span></div>
                    <div className="col-md-7 text-left">
                        <div className="px-2">
                            <input type="text" onChange={($event) => this.updateComment($event.target.value, index)} value={value.comment} className="form-control comment"/>
                        </div>
                    </div>
                    {/*<div className="form-group row mx-auto m-2">*/}
                    {/*    <label className="col-sm-2 col-form-label">{value}</label>*/}
                    {/*    <span className="col-sm-1"/>*/}
                    {/*    <div className="col-sm-8">*/}
                    {/*        <input type="text" className="form-control"/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
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
                {this.state.splitArr.length > 0 ? <div className='comment-box container'>
                    <div className="row header">
                        <div className="col-md-5"><span className='px-2'>Elapsed Time</span></div>
                        <div className="col-md-7"><span className='px-2'>Comments</span></div>
                    </div>
                    {items}
                    <div className='download-button'>
                        <button className='btn btn-primary' onClick={this.downloadCSV}>download CSV</button>
                    </div>
                </div> : null}
            </div>
        );
    }
}
