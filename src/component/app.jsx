import React, { Component } from "react";
import ControlledFormForm from "./form/controlled";
// import UncontrolledForm from "./form/uncontrolled";
// import Profile from './profile';
// import Navbar from './profile/navbar';
class App extends Component {

    render() {
        
        return (
            <div id="App">
                {/* <UncontrolledForm/> */}
                <ControlledFormForm/>

            </div>
        );
    }
}
export default App