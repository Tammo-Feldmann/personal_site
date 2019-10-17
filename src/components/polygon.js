import React from "react";
const { Component } = React;

class Polygon extends Component {
  render() {
    return (
      <div style={{
        position: `absolute`,
        width: `100%`,
        height: `16.5rem`,
        backgroundColor: `#FAFAFA`,
        /* The points are: centered top, left bottom, right bottom */
        clipPath: `polygon(0 -1%, 100% -1%, 100% 21%, 98.6% 21%, 97% 16%, 95.4% 19.5%, 93.4% 12%, 91% 20%, 90% 14%, 89.4% 14.4%, 88.8% 14%, 87.8% 21%, 87% 16%, 86.2% 21%, 12% 22%, 0 100%)`,
        }}>
      </div>
    );
  }
}

export default Polygon;