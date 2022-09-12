import React, { Component } from "react";
// import Profile from './profile';
// import Navbar from './profile/navbar';
class App extends Component {
    // two way data binding
    state = {
        name: null
    }


    handleClickEvent = (event) => {
        console.log("clicked...");
    }
    handleOnChangeEvent = (event) => {
        this.setState({name : event.target.value});
    }
    handleFocusEvent = (event) =>{
        console.log('im focsed');
    }
    handleBlurEvent=(event)=>{
        if(!this.state.name){
            alert('please enter somthing');
        }
        console.log('im blured');
    }



    render() {
        return (
            <div id="App">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-5">
                            <div className="d-flex justify-content-center flex-nowrap">
                                Event
                            </div>
                            <button className="btn btn-primary m-2" onClick={this.haldleClickEvent}>Click Event</button>
                            <div className="d-flex justify-content-center flex-nowrap m-2">
                                <input className="form-control form-control-lg" type="text" placeholder="" onChange={this.handleOnChangeEvent} onFocus={this.handleFocusEvent} onBlur={this.handleBlurEvent} value={this.state.name} />
                            </div>

                            <div className="d-flex justify-content-center flex-nowrap m-2">
                                 {this.state.name && <h3>welcome, {this.state.name}</h3>}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default App