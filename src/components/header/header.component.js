import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import UserContext from '../../userContext';
import './header.styles.scss';

class Header extends React.Component {
    state = {
        menuOpen: false
    }

    showSettings = event => {
        event.preventDefault();
    }

    handleOnOpen = () => {
        this.setState( () => ({ menuOpen:true }));
        const targetElement = document.querySelector('#burger-menu');
        disableBodyScroll(targetElement);
    }

    handleOnClose = () => {
        this.setState(() => ({ menuOpen: false }));
        clearAllBodyScrollLocks();
    }

    handleMenuSelection = () => {
        this.setState( ()=> ({ menuOpen: false }));
        clearAllBodyScrollLocks();
    }

    render () {
        return (
            this.context.loggedIn ?
                <div>
                    <div className="row no-gutters">
                        <div className="col-3 col-md-1 burger-col">
                            <Menu
                                isOpen={this.state.menuOpen}
                                className="my-menu"
                                id="burger-menu"
                                disableAutoFocus
                                onOpen={this.handleOnOpen}
                                onClose={this.handleOnClose}
                            >
                                <NavLink
                                    to="/dashboard"
                                    onClick={this.handleMenuSelection}
                                    exact
                                    activeClassName="selected"
                                    className="side-nav-link"
                                >
                                    <strong className="side-menu-item">DASHBOARD</strong>
                                </NavLink>

                                <NavLink
                                    to="/addtask"
                                    onClick={this.handleMenuSelection}
                                    activeClassName="selected"
                                    className="side-nav-link"
                                >
                                    <strong className="side-menu-item">ADD NEW TASK</strong>
                                </NavLink>

                                <NavLink
                                    to="/showprofile"
                                    onClick={this.handleMenuSelection}
                                    activeClassName="selected"
                                    className="side-nav-link"
                                >
                                    <strong className="side-menu-item">SHOW PROFILE</strong>
                                </NavLink>

                                <NavLink
                                    to="/settings"
                                    onClick={this.handleMenuSelection}
                                    activeClassName="selected"
                                    className="side-nav-link"
                                >
                                    <strong className="side-menu-item">SETTINGS</strong>
                                </NavLink>

                                <NavLink
                                    to="/about"
                                    onClick={this.handleMenuSelection}
                                    activeClassName="selected"
                                    className="side-nav-link"
                                >
                                    <strong className="side-menu-item">ABOUT</strong>
                                </NavLink>
                            </Menu>
                        </div>
                        <div className="col-9 col-md-11 header-col">
                            <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary my-navbar" >
                                <Navbar.Brand>
                                    <Link to="/dashboard" className="text-white">Task-Tracker</Link>
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            </Navbar>
                        </div>
                    </div>
                </div>
            :
                <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary my-navbar" >
                        <Navbar.Brand>
                            <Link to="/" className="text-white">Task-Tracker</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                            <Nav>
                                <Link to="/about" className="text-white">ABOUT</Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>  
        )
    }
}

Header.contextType = UserContext;

export default Header;