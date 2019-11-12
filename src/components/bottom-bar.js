import React, { Component } from "react"
import { Link as RsLink } from "react-scroll";

class Bottom extends Component {
  render() {
    return (
      <div style={{ textAlign: `center`, marginBottom: `0`, cursor: `pointer`, backgroundColor: `#FAFAFA` }}>
        <RsLink
          activeClass="active"
          to="header-section"
          spy={true}
          smooth={true}
          offset={0}
          duration={900}
        >
          <div style={{ display: `flex`, justifyContent: `center` }}>
            <div style={{ display: `flex`, justifyContent: `center`, alignItems: `baseline`, backgroundColor: `#3F4967`, width: `80px`, height: `34px`, borderRadius: `160px 160px 0 0` }}>
              <div style={{
                marginTop: '.7rem',
                border: `solid white`,
                borderWidth: `0 5px 5px 0`,
                display: `inline-block`,
                padding: `9px`,
                borderRadius: `7px`,
                transform: `rotate(-135deg)`
              }}>
              </div>
            </div>
          </div>
        </RsLink>
      </div>
    )
  }
}

export default Bottom