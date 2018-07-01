import React, { Component }from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: 'asd' };
  }

  render() {
    return (
      <div> <input
        value = {this.state.term}
        onChange={ (event) => this.setState({ term: event.target.value }) } />
        Value of the valriable : {this.state.term}
    </div>
  );
  }

  // onInputChange(event) {
  //   event.persist();
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
