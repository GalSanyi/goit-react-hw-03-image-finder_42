import React, { Component } from 'react';
import { toast } from 'react-toastify';

export default class componentName extends Component {
  state = {
    name: '',
  };
  handleNameChange = event => {
    this.setState({ name: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.name.trim() === '') {
      toast.error('write name');
      return;
    }
    this.props.onSubmit(this.state.name);
    this.setState({ name: '' });
  };
  render() {
    return (
      <>
        <header className="searchbar">
          <form className="form" onSubmit={this.handleSubmit}>
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>

            <input
              onChange={this.handleNameChange}
              value={this.state.name}
              name="name"
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}
