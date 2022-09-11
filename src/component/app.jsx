import React, { Component } from "react";
// import Profile from './profile';
// import Navbar from './profile/navbar';
class App extends Component {

   state={
    count : 0
   }
   
 render() {
        return (
            <div id="App">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-5">
                            <div className="d-flex justify-content-center flex-nowrap">
                                <button className="btn btn-primary" 
                                    onClick= {() => {
                                        this.setState(
                                            (prev)=>{
                                                return{
                                                    count : prev.count+1
                                                }
                                            },()=>{
                                                console.log(this.state.count)
                                            }
                                        );
                                       
                                }}
                                    >start</button>
                                <div className="bg-secondary text-white mx-2 p-5">
                                    {this.state.count}
                                </div>
                                <button className="btn btn-primary">Stop</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default App