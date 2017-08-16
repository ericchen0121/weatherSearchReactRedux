import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault(); // don't submit the form, don't reload the page
    this.props.fetchWeather(this.state.term); // make the API call to openWeathermap API
    this.setState({ term: ''}) // reset the search term
  }

  render() {
    return(
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input
          placeholder='Search for weather in your city'
          value={this.state.term}
          className='form-control'
          onChange={this.onInputChange}
        />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    )
  }
}

// this.props.fetchWeather is now available
//
function mapDispatchToProps(dispatch) {
  return bindActionCreators( { fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);
