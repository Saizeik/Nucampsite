import React, { Component } from "react";
import {
  Nav,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Reserve from "./ReserveCampsite.js";


class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }
  handleLogin(event) {
    alert(
      `Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`
    );
    this.toggleModal();
    event.preventDefault();
  }
  render() {
    return (
      <React.Fragment>
        <div class="jumbo">
          <div className="container-fluid text-light p-5">
            <div className="container">
              <div className="row">
                <div className="col">
                  <img
                    src="/assets/images/logo.png"
                    height="100"
                    width="100"
                    alt="NuCamp Logo"
                    align="left"
                  />
                  <h1>NuCamp</h1>
                  <h2 class="h2">a better way to camp</h2>
                </div>
              </div>
            </div>
          </div>
          <Reserve />
        </div>

        <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
          <NavbarBrand className="mr-auto" href="/">
            <img
              src="/assets/images/logo.png"
              height="30"
              width="30"
              alt="NuCamp Logo"
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <i className="fa fa-home fa-lg" /> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/directory">
                  <i className="fa fa-list fa-lg" /> Directory
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/aboutus">
                  <i className="fa fa-info fa-lg" /> About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contactus">
                  <i className="fa fa-address-card fa-lg" /> Contact Us
                </NavLink>
              </NavItem>
            </Nav>
            <div class="login">
              <span className="position-absolute top-0 end-0">
                <Button className="loginButton" onClick={this.toggleModal}>
                  <i className="fa fa-sign-in fa-lg"> Login</i>
                </Button>
              </span>
            </div>
          </Collapse>
        </nav>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <div className="modal-Header-Login" toggle={this.toggleModal}>
            Login
          </div>

          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  innerRef={(input) => (this.username = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  innerRef={(input) => (this.password = input)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={(input) => (this.remember = input)}
                  />
                  Remember Me
                </Label>
              </FormGroup>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <Button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  a
                  href="/home"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="btn btn-primary btn-sm "
                  value="submit"
                  color="primary"
                >
                  Sign In
                </Button>
              </div>
            </Form>
           
          </ModalBody>
        </Modal>
       
        
        
      </React.Fragment>
    );
  }
}

export default Header;
