import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);

  }

  onInputChange(event) {
    this.setState({ term: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault(); // don't submit the form
  }

  render() {
    return(
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input
          placeholder='Search for weather in your city'
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span>
          <button type='submit'>Submit</button>
        </span>
      </form>
    )
  }
}
