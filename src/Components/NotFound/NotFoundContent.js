import React from "react";
import "./NotFoundcontent.css";
import { Container } from "react-bootstrap";

function NotFoundContent() {
  return (
    <>
      <section className="notfound_back">
        <Container>
          <div className="notfound_txt">
            <h2>404</h2>
            <h2>Not Found</h2>
          </div>
        </Container>
      </section>
    </>
  );
}

export default NotFoundContent;
