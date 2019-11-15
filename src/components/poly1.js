import React, { Component } from "react"
import "./layout.css"
import HoverText from "../components/hover-text"
import { Link as RsLink } from "react-scroll"

class Poly1 extends Component {
  render() {
    return (
      <div
        style={{
          position: `absolute`,
          width: `100%`,
          height: `16.5rem`,
          backgroundColor: `#3F4967`,
          /* The points are: centered top, left bottom, right bottom */
          clipPath: `polygon(0 -1%, 100% -1%, 100% 21%, 98.6% 21%, 97% 16%, 95.4% 19.5%, 93.4% 12%, 91% 20%, 90% 14%, 89.4% 14.4%, 88.8% 14%, 87.8% 21%, 87% 16%, 86.2% 21%, 12% 22%, 0 100%)`,
        }}
      >
        <div
          style={{
            display: `flex`,
            justifyContent: `center`,
            marginLeft: `4rem`,
          }}
        >
          <div
            style={{
              display: `flex`,
              /* The values represent: top, right, bottom, left */
              padding: `1rem 8rem 0rem 0rem`,
              justifyContent: `space-between`,
              width: `50rem`,
              minWidth: `28rem`,
            }}
          >
            <RsLink
              activeClass="active"
              to="about-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <HoverText>about</HoverText>
            </RsLink>
            <RsLink
              activeClass="active"
              to="expertise-section"
              spy={true}
              smooth={true}
              offset={120}
              duration={700}
            >
              <HoverText>expertise</HoverText>
            </RsLink>
            <RsLink
              activeClass="active"
              to="experience-section"
              spy={true}
              smooth={true}
              offset={-20}
              duration={1100}
            >
              <HoverText>projects</HoverText>
            </RsLink>
          </div>
        </div>
      </div>
    )
  }
}

export default Poly1
