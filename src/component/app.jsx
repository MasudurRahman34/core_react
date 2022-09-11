import React, { Component } from "react";
import Profile from './profile';
import Navbar from './profile/navbar';
class App extends Component {
    render() {
        return (
            <div id="App">
                <div className="container">
                    <Navbar/>
                    <Profile />
                </div>
                

            </div>
        );
    }
}
export default App