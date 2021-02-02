import React, { Component } from "react"
import { Link as RsLink } from "react-scroll";
import styles from "./Footer.module.css"

class Bottom extends Component {
  render() {
    return (
      <div style={{
        textAlign: `center`, marginBottom: `0`, cursor: `pointer`,
        //  backgroundColor: `#FAFAFA` 
      }}>
        <RsLink
          activeClass="active"
          to="header-section"
          spy={true}
          smooth={true}
          offset={0}
          duration={900}
        >
          <div style={{ display: `flex`, justifyContent: `center` }}>
            <div
              className={styles.bottom_bar}
              style={{
                display: `flex`, justifyContent: `center`, alignItems: `baseline`,
                backgroundColor: `#3F4967`,
                paddingTop: "11px",
                width: `80px`, height: `34px`, borderRadius: `160px 160px 0 0`,
              }}>
              <svg width="32" height="16" viewBox="0 0 77 52" fill="none">
                <path d="M74.0464 49.788L37.7444 4.179L2.96096 49.788" stroke-width="10" />
              </svg>
            </div>
          </div>
        </RsLink>
      </div>
    )
  }
}

export default Bottom