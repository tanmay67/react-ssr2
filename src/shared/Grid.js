import React, { Component } from 'react';

export class Grid extends Component {
  render() {
    const repos = this.props.data;
    return (
      <div className="row no-gutter">
        {repos.map((item) => (
          <div key={item.id} className="col-sm-6 col-md-4">
            <div className="card m-2">
              <div className="card-header">{item.title}</div>
              <div className="card-body">{item.body}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Grid;
