import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Menu.css";
import logo from "./logo/logo.png";
import useToken from "../../hooks/useToken";
import useUser from "../../hooks/useUser";


function Menu() {
  // const [token]= useToken();
  const[user]=useUser()

  console.log(user);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navBg" sticky="top">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Brand className="navBrand">
            <Link to="/home">
              <img src={logo} alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav nav_background">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/services">Services</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/portfolio">Portfolio</Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/aboutus">About Us</Link>
              </Nav.Link>

              <NavDropdown
                title="Our Research"
                className="dropMenu"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="https://vrdlab.com/" target="_blank">
                  Research Lab
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://vrdlab.com/publications"
                  target="_blank"
                >
                  Research Publications
                </NavDropdown.Item>

                <NavDropdown.Item
                  href="https://vrdlab.com/publications"
                  target="_blank"
                >
                  Research Products
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link>
                <Link to="/contact">Contact</Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/blog">Blogs</Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/career">Career</Link>
              </Nav.Link>

            </Nav>

           
              {user? 
               <Nav.Link className="sing_area">
               <Link to="/user-dashboard">
               <span className="signIn">{user?.first_name}</span>
             </Link> 
             </Nav.Link>

             :
             <Nav.Link className="sing_area">
             <Link to="/sign-in">
             <span className="signIn">Sign In</span>
           </Link>
             </Nav.Link>

            }
              
          
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;
