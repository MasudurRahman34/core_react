import React, { Component } from "react";
// import Profile from './profile';
// import Navbar from './profile/navbar';
class App extends Component {

    state = {
        count: new Date().toLocaleTimeString()
    }
    
    intervalId=null;
    increamentCount = () => {
        this.setState({ count: this.state.count + 1 });
    }
    decreamentCount = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 })
        };
    }
    startTimer=()=>{
        if (this.state.count > 0 && !this.intervalId) {
            this.intervalId = setInterval(() => {
                this.setState({ count: this.state.count-1},()=>{
                    if (this.state.count === 0) {
                        alert('timer finish')
                        clearInterval(this.intervalId)
                        this.intervalId=null
                    }
                });   
            }, 1000);
        }
    }
    stopTimer=()=>{
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId=null;
        }
    }
    resetTimer=()=>{
            this.setState({count: 0});
            clearInterval(this.intervalId);
            this.intervalId=null;
    }
    render() {
        return (
            <div id="App">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-5">
                            <div className="d-flex justify-content-center flex-nowrap">
                            </div>
                        </div>
                        <div className="col-md-12 mt-5">
                            <div className="d-flex justify-content-center flex-nowrap">
                                <button className="btn btn-primary"
                                    onClick={this.decreamentCount}
                                >-</button>
                                <div className="bg-secondary text-white mx-2 p-5">
                                    {this.state.count}
                                </div>
                                <button className="btn btn-primary" onClick={this.increamentCount}>+</button>
                            </div>
                        </div>
                        <div className="col-md-12 mt-5">
                            <div className="d-flex justify-content-center flex-nowrap">
                                <button className="btn btn-danger m-1"
                                    onClick={this.stopTimer}
                                >Stop</button>
                                <button className="btn btn-info m-1"
                                    onClick={this.startTimer}
                                >Start</button>
                                <button className="btn btn-primary m-1"  onClick={this.resetTimer}>Reset</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default App