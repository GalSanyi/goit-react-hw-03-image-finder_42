import Modal from './Modal/Modal.js';
import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar.js';
import ImageGallery from './ImageGallery/ImageGallery.js';
import { ToastContainer } from 'react-toastify';

export default class App extends Component {
  state = {
    showModal: false,
    hits: null,
    loading: false,
    name: '',
  };

  // componentDidMount() {
  //   this.setState({ loading: true });
  //   fetch(
  //     'https://pixabay.com/api/?key=25003367-734d14b32e98f9c9fd7c27c2f&q=cat&page=1&image_type=photo&orientation=horizontal&per_page=12'
  //   )
  //     .then(res => res.json())
  //     .then(hits => this.setState({ hits }))
  //     .finally(() => this.setState({ loading: false }));
  // }
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  handleSubmit = name => {
    this.setState({ name });
  };
  render() {
    const { showModal } = this.state;
    return (
      <>
        {this.state.loading && <h1>download</h1>}
        {this.state.hits && <div>{this.state.hits.webformatURL}</div>}
        <Searchbar onSubmit={this.handleSubmit} />
        <button type="button" onClick={this.toggleModal}>
          open modal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Hello world</h1>
            <button type="button" onClick={this.toggleModal}>
              close
            </button>
          </Modal>
        )}
        <ImageGallery name={this.state.name} />
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
