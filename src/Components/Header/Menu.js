import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Menu.css";
import logo from "./logo/logo.png";
import useToken from "../../hooks/useToken";
import useUser from "../../hooks/useUser";
import { FaUserCircle } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import { baseUrl } from "../../hooks/url";


function Menu() {
  const [token]= useToken();
  const[user]=useUser();
  const navigate=useNavigate()

  // console.log(user);

  const handleLogout=()=>{

    const url = `${baseUrl}/api/logout`;
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            "Authorization": `Bearer ${token}`
        }
    })
        .then(res => res.json())
        .then(result => {
          console.log(result);
          window.localStorage.removeItem('token');
          window.localStorage.removeItem('user');
          navigate('/sign-in');
        })
  };


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
                <Link to="/blog">Blogs</Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/career">Career</Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/notices">Notices</Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/contact">Contact</Link>
              </Nav.Link>

            </Nav>

           
              {(token && user)? 

            <NavDropdown
                title={<><FaUserCircle className="fs-4 mr-2"/>{user.first_name}</> }
                className="dropMenu sing_area logout-dropdown"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="/user-dashboard">
                  {/* <Link to="/user-dashboard"> </Link> */}
                  Profile
                </NavDropdown.Item>

                <NavDropdown.Item onClick={handleLogout}>
                    Logout
                </NavDropdown.Item>
              </NavDropdown>

             :
             <Nav.Link className="sing_area">
                <Link to="/sign-in">
                <span className="signIn only-signin">
                  Sign In
                  </span>
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


