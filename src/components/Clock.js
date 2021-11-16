import React from 'react';

const Clock = () => {
  return (
      <div>
            <h1 className="heading">
              <span className="text">
                {new Date().toLocaleTimeString(this.props.locale)}
              </span>
            </h1>
          </div>
  );
};

export default Clock;