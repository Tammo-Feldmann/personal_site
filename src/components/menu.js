import React from 'react';

const Menu = () => (
    <div style = {{ 
      background: '#2F3854',
      paddingTop: '20px',
      color: 'white'
    }}>

      <ul style={{ 
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly'
      }}>

        <li>about</li>
        <li>expertise</li>
        <li>projects</li>

      </ul>
    </div>
  )

export default Menu;