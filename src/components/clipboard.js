import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import EmailLogo from "../images/email.svg"

class CopyText extends React.Component {
  render() {
    //multi line text
    let text = 'tammo@stanford.alumni.com';
    return (
      <CopyToClipboard 
         text={text}
         onCopy={() => {
           //do stuff here, like summon a confirmation prompt
         }}>
          <img src={EmailLogo} alt="email logo"/>
      </CopyToClipboard>
    );
  }
}

export default CopyText