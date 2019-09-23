import PropTypes from "prop-types";
import React from "react";
import MainIcon from "./main-icon";
import LinkedIn from "../images/LinkedIn.svg";
import GitHub from "../images/GitHub.svg";
import Clipboard from "../components/clipboard";
import HoverText from "../components/hover-text";
import { Link as RsLink} from "react-scroll";
import ReactTooltip from "react-tooltip"

const Header = ({ siteTitle }) => (
  <header id="header-section"
    style={{
      background: `white`
    }}
  >  
      <div style={{
        display: `flex`,
        alignItems: `baseline`,
        justifyContent:`space-between`,
        padding: `2rem`,
        marginLeft: `6rem`,
        marginRight: `4rem`
        }}
        >
        <MainIcon></MainIcon>
        <RsLink
          activeClass="active"
          to="about-section"
          spy={true}
          smooth={true}
          offset={90}
          duration= {500}
          ><HoverText>about</HoverText>
        </RsLink>
        <RsLink
          activeClass="active"
          to="expertise-section"
          spy={true}
          smooth={true}
          offset={5}
          duration= {700}
          ><HoverText>expertise</HoverText>
        </RsLink>
        <RsLink
          activeClass="active"
          to="projects-section"
          spy={true}
          smooth={true}
          offset={0}
          duration= {1100}
          ><HoverText>projects</HoverText>
        </RsLink>
        
        <div style={{display:`flex`, justifyContent: `space-between`, minWidth: `6rem`}}>
          <div data-tip="Copy my email to your clipboard" style={{cursor: 'pointer'}}>
            <Clipboard></Clipboard>
          </div>
          <a href="https://www.linkedin.com/in/tammo-feldmann/">
            <img src={LinkedIn}  data-tip="LinkedIn" alt="LinkedIn logo"/>
          </a>
          <a href="https://github.com/Tammo-Feldmann" data-tip="GitHub" style={{color:`blue`}}>
            <img src={GitHub} alt="GitHub logo"/>
          <ReactTooltip type="light"/>
          </a>
        </div>
      </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
