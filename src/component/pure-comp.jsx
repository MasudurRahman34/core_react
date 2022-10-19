import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    return (
      <div><p>pure-comp . {this.props.name}</p></div>
    )
  }
}
export default PureComp;