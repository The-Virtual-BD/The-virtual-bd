import React from "react";
import "./TeamCard.css";
import { ExternalLink } from "react-external-link";
import { Icon } from "@iconify/react";
import logo from "./img/c_logo.svg";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";

function TeamCard(data) {
  return (
    <>
      <section>
        <div className="mobile_nav">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="https://www.thevirtualbd.com/">
                <img src={logo} alt="Logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="https://www.thevirtualbd.com/">Home</Nav.Link>
                  <Nav.Link href="https://vcourse.net/">vcourse.net</Nav.Link>
                  <Nav.Link href="https://vrdlab.com/">vrdlab.com</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div className="member_area">
          <div className="info_left">
            <div className="companuy_info">
              <div className="company_logo">
                <img src={logo} alt="LOGO" />
              </div>
              <div className="sister_web">
                <div className="web_link">
                  <li>
                    <ExternalLink
                      href="https://www.thevirtualbd.com/"
                      target="_blank"
                    >
                      Home
                    </ExternalLink>
                  </li>
                  <li>
                    <ExternalLink href="https://vcourse.net/" target="_blank">
                      vcourse.net
                    </ExternalLink>
                  </li>
                  <li>
                    <ExternalLink href="https://vrdlab.com/" target="_blank">
                      vrdlab.com
                    </ExternalLink>
                  </li>
                </div>
                <div className="copy_right">
                  <p>&#9400; 2022 The Virtual BD</p>
                </div>
              </div>
            </div>
          </div>

          {/* ========================= */}

          <div className="info_right">
            {data.map((data) => (
              <div className="member" key={data.id}>
                <div className="member_info">
                  <div className="member_img">
                    <img src={data.img} alt={data.name} />
                  </div>
                  <div className="member_content">
                    <div className="member_name">
                      <h2>{data.name}</h2>
                      <p>{data.designation}</p>
                    </div>
                    <div className="member_article">
                      <p>{data.content_1}</p>
                      <p>{data.content_2}</p>

                      <p>{data.content_3}</p>
                    </div>
                    <div className="member_social">
                      <li>
                        <ExternalLink href={data.facebook} target="_blank">
                          <Icon icon="akar-icons:facebook-fill" />
                        </ExternalLink>
                      </li>
                      <li>
                        <ExternalLink href={data.twitter} target="_blank">
                          <Icon icon="entypo-social:twitter-with-circle" />
                        </ExternalLink>
                      </li>
                      <li>
                        <ExternalLink href={data.instagram} target="_blank">
                          <Icon icon="icon-park-solid:instagram" />
                        </ExternalLink>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ========================= */}
        </div>
        <div className="mobile_footer">
          <p>&#9400; 2022 The Virtual BD</p>
        </div>
      </section>
    </>
  );
}

export default TeamCard;
