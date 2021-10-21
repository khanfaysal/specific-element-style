import React, { Component } from 'react'

export default class Clock extends Component {
    render() {
        return (
          <div>
            <h1 className="heading">
              <span className="text">
                {new Date().toLocaleTimeString(this.props.locale)}
              </span>
            </h1>
          </div>
        );
      }
}

