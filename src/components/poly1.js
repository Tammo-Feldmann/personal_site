import React from "react"
import HoverText from "../components/hover-text"
import { Link as RsLink } from "react-scroll"
import styles from './main.module.css'
import { useWindowDimensions } from './utils/windowDimensions'

const Poly1 = () => {
  const { windowWidth } = useWindowDimensions();
  return (
    <div
      className={styles.polygon}
      style={{
        backgroundColor: `#3F4967`,
        /* The points are: centered top, left bottom, right bottom */
        clipPath: `polygon(0 -1%, 100% -1%, 100% 21%, 98.6% 21%, 97% 16%, 95.4% 19.5%, 93.4% 12%, 91% 20%, 90% 14%, 89.4% 14.4%, 88.8% 14%, 87.8% 21%, 87% 16%, 86.2% 21%, 15% 22%, 0 ${windowWidth <= 414 ? "22%" : windowWidth <= 768 ? "65%" : "100%"})`,
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
            to="skills-section"
            spy={true}
            smooth={true}
            offset={120}
            duration={700}
          >
            <HoverText>skills</HoverText>
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

export default Poly1
