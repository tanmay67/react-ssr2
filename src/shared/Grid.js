import React, { Component } from 'react';

export class Grid extends Component {
  constructor(props) {
    super(props);

    let repos;
    if (__isBrowser__) {
      repos = window.__INITIAL_DATA__;
      delete window.__INITIAL_DATA__;
    } else {
      repos = this.props.staticContext.data;
    }

    this.state = {
      repos,
      loading: repos ? false : true,
    };

    this.fetchRepos = this.fetchRepos.bind(this);
  }
  componentDidMount() {
    if (!this.state.repos) {
      this.fetchRepos();
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchRepos();
    }
  }
  fetchRepos() {
    this.setState(() => ({
      loading: true,
    }));

    this.props.fetchInitialData().then((repos) =>
      this.setState(() => ({
        repos,
        loading: false,
      }))
    );
  }
  render() {
    const { loading, repos } = this.state;

    if (loading === true) {
      return <p>LOADING</p>;
    }

    return (
      <ul
        className="list-unstyled"
        style={{ display: 'flex', flexWrap: 'wrap' }}
      >
        {repos.map(({ userId, id, title, body }) => (
          <li key={id} style={{ margin: 30 }}>
            <ul className="list-group">
              <li className="list-group-item">
                <a href="#">{title}</a>
              </li>
              <li className="list-group-item">{body}</li>
            </ul>
          </li>
        ))}
      </ul>
    );
  }
}

export default Grid;
