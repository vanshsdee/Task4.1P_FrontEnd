import React from 'react';
import { Menu } from 'semantic-ui-react';
import './App.css'; // Import the CSS file

const Header = () => {
  return (
    <Menu className="header-menu"> 
      <Menu.Item header>DEV@Deakin</Menu.Item>
      <Menu.Item name="Home" />
      <Menu.Item name="Articles" />
      <Menu.Item name="Tutorials" />
      <Menu.Menu position='right'> 
        <Menu.Item name="Post" />
        <Menu.Item name="Login" />
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
