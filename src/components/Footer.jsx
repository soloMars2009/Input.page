import React from "react";
import { Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'

function Footer(){
    return(
        <>
        <Nav className="bg-light myFooter">
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
                        <Link to="/creeate">
                            Create
                        </Link>
                    </NavLink>
                </NavItem>
</Nav>
        </>
    )
}

export default Footer;