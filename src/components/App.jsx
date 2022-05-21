import Modal from './Modal';

import React, { Component } from 'react';

export default class App extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { showModal } = this.state;
    return (
      <>
        <button type="button" onClick={this.toggleModal}>
          open modal
        </button>
        {showModal && (
          <Modal>
            <h1>Hello world</h1>
            <button type="button" onClick={this.toggleModal}>
              close
            </button>
          </Modal>
        )}
      </>
    );
  }
}
