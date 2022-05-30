import React from "react"
import PropTypes from "prop-types"

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const GET_GREETINGS = 'GET_GREETINGS_REQUEST';
const GET_GREETINGS_SUCCESS = 'GET_GREETINGS_SUCCESS';

function getGreetings() {
  return dispatch => {
    dispatch({ type: GET_GREETINGS });
    return fetch('v1/greeting')
      .then(response => response.json())
      .then(json => dispatch(getGreetingsSuccess(json)))
      .catch(error => console.log(error));
  }
};

export function getGreetingsSuccess(json) {
  return {
    type: GET_GREETINGS_SUCCESS,
    json
  }
}

class Greeting extends React.Component {
  render () {
    const { greeting } = this.props;
    const greetingList = greeting.map((greeting) => {
      return <h1>{greeting.message}</h1>
    })

    return (
      <React.Fragment>
        <button onClick={() => this.props.getGreetings()}>Get Random Greeting</button>
        <br />
        <div>{ greetingList }</div>
      </React.Fragment>
      
    );
  }
}

const structuredSelector = createStructuredSelector({
  greeting: state => state.greeting,
});

const mapDispatchToProps = { getGreetings };

export default connect(structuredSelector, mapDispatchToProps)(Greeting);
