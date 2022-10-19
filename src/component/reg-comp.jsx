import React, { Component } from 'react'

class RegularComponent extends Component {
  render() {
    return (
        <div>
            <p>this is regular Componet. {this.props.name}</p>
        </div>
    
    )
  }
}
export default RegularComponent;
