import React, { Component } from "react";
import Profile from './profile';
import Navbar from './profile/navbar';
import RegularComponent from "./reg-comp";
import SmartComponent from "./smart";
import PureComp from "./pure-comp";
import FragComponent from "./frag-comp";
class App extends Component {
    state={
        name:'Md Masudur Rahman'
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({name:'Shuvo'})
        }, 1000);
    }
    render() {
        return (
            <div id="App">
                <div className="container">
                    <div><FragComponent/></div>
                    
                    <Navbar/>
                    <Profile />
                    <SmartComponent/>
                    <RegularComponent name={this.state.name}/>
                    <PureComp name={this.state.name}/>
                    
                    
                </div>
                

            </div>
        );
    }
}
export default App