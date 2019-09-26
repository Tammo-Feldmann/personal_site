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
      background: `white`,
      boxShadow: `5px`
    }}
  >  
      <div style={{
        display: `flex`,
        alignItems: `baseline`,
        justifyContent:`space-between`,
        paddingTop: `1.5rem`,
        paddingBottom: `.5rem`,
        marginLeft: `8rem`,
        marginRight: `6rem`
        }}
        >
        <MainIcon></MainIcon>
        <RsLink
          activeClass="active"
          to="about-section"
          spy={true}
          smooth={true}
          offset={0}
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
        
        <div style={{display:`flex`, justifyContent: `space-between`, alignItems: `baseline`, minWidth: `6rem`}}>
          <div data-tip="Copy my email to your clipboard" style={{cursor: 'pointer', width:`24px`}}>
            <Clipboard></Clipboard>
          </div>
          <a href="https://www.linkedin.com/in/tammo-feldmann/">
            <img src={LinkedIn} data-tip="LinkedIn" alt="LinkedIn logo" style={{width:`20px`}}/>
          </a>
          <a href="https://github.com/Tammo-Feldmann" data-tip="GitHub" style={{width:`21px`}}>
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
