import React from "react";
import Dump from "./dump";

const messages=[
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
]

class SmartComponent extends React.Component{
    state={
        msg:messages[0]
    }
    componentDidMount(){
        
        setInterval(() => {
            const randomIndex=Math.floor(Math.random() * messages.length )
            this.setState({
                msg:messages[randomIndex]
            });
        }, 1000);
        
    }
    render(){
        return(
            <div>
                <h3>hi i'm smart componet</h3>
                <Dump msg={this.state.msg}/>
            </div>
        );
    }
}
export default SmartComponent;