import React, { useState }  from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import "../App.css";
import { BrowserRouter as Router } from 'react-router-dom';
  
class FullPageIntroWithFixedTransparentNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <header>
        <Router>
            <MDBNavbar color="bg-primary" fixed="top" dark expand="md" scrolling transparent>
            <MDBContainer fluid>
              <MDBNavbarBrand href="/">
                <strong>Rachit Gupta</strong>
              </MDBNavbarBrand>
              
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse  isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                <MDBNavItem active>
                <a aria-current="page" class="nav-link Ripple-parent active" data-test="nav-link" href="#home">Home<div data-test="waves" class="Ripple is-reppling" ></div></a>
                  </MDBNavItem>
                  <MDBNavItem>
                  <a aria-current="page" class="nav-link Ripple-parent active" data-test="nav-link" href="#about">About<div data-test="waves" class="Ripple is-reppling" ></div></a>
                  </MDBNavItem>
                  <MDBNavItem>
                  <a aria-current="page" class="nav-link Ripple-parent active" data-test="nav-link" href="#intersets">Interests<div data-test="waves" class="Ripple is-reppling" ></div></a>
                  </MDBNavItem>
                  <MDBNavItem>
                  <a aria-current="page" class="nav-link Ripple-parent active" data-test="nav-link" href="#resume">Resume<div data-test="waves" class="Ripple is-reppling" ></div></a>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
              
              </MDBContainer>
            </MDBNavbar>
            </Router>
            </header>
            </div>
    );
  }
}
  export default FullPageIntroWithFixedTransparentNavbar;