import React, { Component } from 'react';

import { Link } from 'react-router-dom'; // Links only are required in this component
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.toggleBurgerMenu = this.toggleBurgerMenu.bind(this);
        this.closeBurgerMenu = this.closeBurgerMenu.bind(this);
        this.state = {
            isOpen: false
        };
    }

    // toggle burger menu when clicked
    toggleBurgerMenu() {
        this.setState({
            isOpen: !this.state.isOpen
        });


    }
    // toggle burger menu when menu link is clicked
    closeBurgerMenu() {
        if (this.state.isOpen === true) {
            this.toggleBurgerMenu();

        }
    }

    render() {
        return (
            <div>
                <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary" expand="md">
                    <NavbarBrand href="/">React Redux API Starter Template - rrast-site1</NavbarBrand>
                    <NavbarToggler onClick={this.toggleBurgerMenu} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink><Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/">Home</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/about">About</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/contact">Contact</Link></NavLink>
                            </NavItem>
                            {/* <NavItem>
                                <NavLink><Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/posts">Posts</Link></NavLink>
                            </NavItem> */}
                            {/* <NavItem>
                                <NavLink><Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/users">Users</Link></NavLink>
                            </NavItem> */}
                            {/* <NavItem>
                                <NavLink><Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/cities">Cities</Link></NavLink>
                            </NavItem> */}
                            {/* <NavItem>
                                <NavLink><Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/teams">Teams</Link></NavLink>
                            </NavItem> */}
                            {/* <NavItem>
                                <NavLink><Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/numbers">Numbers</Link></NavLink>
                            </NavItem> */}
                            {/* <NavItem>
                                <NavLink><Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/players">Players</Link></NavLink>
                            </NavItem> */}
                            {/* <NavItem>
                                <NavLink><Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/todos">Todos</Link></NavLink>
                            </NavItem> */}
                            {/* <NavItem>
                                <NavLink><Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/form">Form</Link></NavLink>
                            </NavItem> */}
                            {/* <NavItem>
                                <NavLink><Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/apiposts">ApiPosts</Link></NavLink>
                            </NavItem> */}
                            {/* <NavItem>
                                <NavLink><Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/apiusers">ApiUsers</Link></NavLink>
                            </NavItem> */}
                            {/* <NavItem>
                                <NavLink><Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/apicomments">ApiComments</Link></NavLink>
                            </NavItem> */}
                            {/* <NavItem>
                                <NavLink><Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/apitodos">ApiTodos</Link></NavLink>
                            </NavItem> */}
                            {/* <NavItem>
                                <NavLink><Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/apibootswatches">ApiBootswatches</Link></NavLink>
                            </NavItem> */}
                            {/* <NavItem>
                                <NavLink><Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/apiopenweathers">ApiOpenWeathers</Link></NavLink>
                            </NavItem> */}
                            <NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Components
                                </DropdownToggle>
                                    <DropdownMenu right>

                                        <NavLink>
                                        <Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/posts">
                                                <DropdownItem>
                                                    Posts
                                            </DropdownItem>
                                            </Link>
                                        </NavLink>

                                        <NavLink>
                                            <Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/users">
                                                <DropdownItem>
                                                    Users
                                            </DropdownItem>
                                            </Link>
                                        </NavLink>

                                        <NavLink>
                                            <Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/cities">
                                                <DropdownItem>
                                                    Cities
                                            </DropdownItem>
                                            </Link>
                                        </NavLink>

                                        <NavLink>
                                            <Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/teams">
                                                <DropdownItem>
                                                    Teams
                                            </DropdownItem>
                                            </Link>
                                        </NavLink>

                                        <NavLink>
                                            <Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/numbers">
                                                <DropdownItem>
                                                    Numbers
                                            </DropdownItem>
                                            </Link>
                                        </NavLink>

                                        <NavLink>
                                            <Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/players">
                                                <DropdownItem>
                                                    Players
                                            </DropdownItem>
                                            </Link>
                                        </NavLink>

                                        <NavLink>
                                            <Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/todos">
                                                <DropdownItem>
                                                    Todos
                                            </DropdownItem>
                                            </Link>
                                        </NavLink>

                                        <NavLink>
                                            <Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/form">
                                                <DropdownItem>
                                                    Form
                                            </DropdownItem>
                                            </Link>
                                        </NavLink>

                                        {/* <DropdownItem>
                                            Option 2
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Reset
                                        </DropdownItem> */}
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </NavItem>
                            <NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        APIs
                                </DropdownToggle>
                                    <DropdownMenu right>

                                        <NavLink>
                                            <Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/apiposts">
                                                <DropdownItem>
                                                    ApiPosts
                                            </DropdownItem>
                                            </Link>
                                        </NavLink>

                                        <NavLink>
                                            <Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/apiusers">
                                                <DropdownItem>
                                                    ApiUsers
                                            </DropdownItem>
                                            </Link>
                                        </NavLink>

                                        <NavLink>
                                            <Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/apicomments">
                                                <DropdownItem>
                                                    ApiComments
                                            </DropdownItem>
                                            </Link>
                                        </NavLink>

                                        <NavLink>
                                            <Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/apitodos">
                                                <DropdownItem>
                                                    ApiTodos
                                            </DropdownItem>
                                            </Link>
                                        </NavLink>

                                        <NavLink>
                                            <Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/apibootswatches">
                                                <DropdownItem>
                                                    ApiBootswatches
                                            </DropdownItem>
                                            </Link>
                                        </NavLink>

                                        <NavLink>
                                            <Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/apiopenweathers">
                                                <DropdownItem>
                                                    ApiOpenWeathers
                                            </DropdownItem>
                                            </Link>
                                        </NavLink>

                                        {/* <DropdownItem>
                                            Option 2
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Reset
                                        </DropdownItem> */}
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;


