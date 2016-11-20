import React, { Component } from 'react';
import Icon from 'react-fontawesome';


class Search extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  onChange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <form className="navbar-form navbar-right">
        <div className="input-group">
          <div className="input-group-addon">
            <Icon name="search" />
          </div>
          <input
            value={this.state.value}
            onChange={e => this.onChange(e.target.value)}
            type="text"
            className="form-control input-sm"
            style={{ width: '400px' }}
            placeholder="Search"
          />
        </div>
      </form>
    );
  }
}

export default Search;
