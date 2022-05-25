import React, { Component } from 'react';

export default class ImageGallery extends Component {
  state = {
    items: [],
    loading: false,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.name !== this.props.name) {
      this.setState({ loading: true, items: [] });

      fetch(
        `https://pixabay.com/api/?key=25003367-734d14b32e98f9c9fd7c27c2f&q=${this.props.name}&page=1&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }
        })
        .then(data => {
          this.setState({ items: data.hits });
        })
        .finally(() => this.setState({ loading: false }));
    }
  }
  render() {
    const { items } = this.state;
    return (
      <>
        {this.state.loading && <span>...download</span>}
        <ul className="gallery">
          {items.map(item => (
            <li key={item.id}>
              <img src={item.webformatURL} alt="img" width="300" height="300" />
            </li>
          ))}
        </ul>
      </>
    );
  }
}
