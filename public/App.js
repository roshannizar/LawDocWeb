import React, { Component } from 'react';
import { NavDropdown, Nav } from 'react-bootstrap';

import './App.css';
import Pic from './icons/person.png';
import style from 'bootstrap/dist/css/bootstrap.css';


class App extends Component {

  render() {
    return (
      <div>
        <div className="nav-bar">
          <div className="nav-brand">
            <label className="brand">LawDoc</label>
          </div>
          <div className="link-bar">
            <Nav className="mr-auto">
              <Nav.Link href="#home" className="link-bar-color">Notification</Nav.Link>
              <Nav.Link href="#link" className="link-bar-color">Support</Nav.Link>
              <NavDropdown title="Mark Otto" id="basic-nav-dropdown" className="link-bar-color">
                <div className="person">
                  <img src={Pic} className="person-img" />
                </div>
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Switch User</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Sign Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>
        </div>
      </div>
    );
  }
}

export default App;