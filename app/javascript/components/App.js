import React from "react"
import PropTypes from "prop-types"
class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        APP COMPONENT!: {this.props.greeting}
      </React.Fragment>
    );
  }
}

export default App
