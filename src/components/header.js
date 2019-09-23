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
  <header
    style={{
      background: `white`
    }}
  >
    <div style={{
        marginLeft: `6.5rem`,
        marginRight: `6.5rem`,
        paddingTop: `1.5rem`,
        display: `flex`,
        alignItems: 'baseline',
        justifyContent: `space-between`
      }}
    >
      <MainIcon></MainIcon>
      
      <div style={{
        color: `blue`,
        display: `flex`,
        minWidth: '28rem',
        alignItems: 'baseline',
        justifyContent: 'space-between'
        }}
        >
        <RsLink
          activeClass="active"
          to="about-section"
          spy={true}
          smooth={true}
          offset={70}
          duration= {500}
          ><HoverText>about</HoverText>
        </RsLink>
        <RsLink
          activeClass="active"
          to="expertise-section"
          spy={true}
          smooth={true}
          offset={30}
          duration= {700}
          ><HoverText>expertise</HoverText>
        </RsLink>
        <RsLink
          activeClass="active"
          to="projects-section"
          spy={true}
          smooth={true}
          offset={50}
          duration= {900}
          ><HoverText>projects</HoverText>
        </RsLink>
        
      </div>

      <div style={{
        display: `flex`,
        justifyContent: 'space-between',
        minWidth: '5.5rem'
        }}
      >
        <p data-tip="Copy my email to your clipboard" style={{cursor: 'pointer'}}>
          <Clipboard></Clipboard>
        </p>
        <a href="https://www.linkedin.com/in/tammo-feldmann/">
          <img src={LinkedIn}  data-tip="LinkedIn" alt="LinkedIn logo"/>
        </a>
        <a href="https://github.com/Tammo-Feldmann" data-tip="Git Hub" style={{color:`blue`}}>
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
