import React from "react";
import { Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <Nav className="bg-light">
                <NavItem>
                    <NavLink >
                        <Link to='/'>
                            Comments
                        </Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink >
                        <Link to="/albums">
                            Albums
                        </Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link to="/blogs">
                            Blogs
                        </Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink >
                        <Link to="/create">
                            Create
                        </Link>
                    </NavLink>
                </NavItem>
            </Nav>
        </>
    )
}

export default Navbar;