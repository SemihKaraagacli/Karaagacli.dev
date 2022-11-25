import { Button, Nav, Row, Container, Col } from "react-bootstrap";
import { MetaFunction } from "@remix-run/node";
import { Scripts } from "@remix-run/react";
import t from "../styles/style.css";

export function links() {
  return [{ rel: "stylesheet", href: t }];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Main",
  viewport: "width=device-width,initial-scale=1",
});

export default function Index() {
  return (
    <>
      <div className="">
        <div className="sky">
          <div className="text">#CODEVEMBER</div>
          <div className="stars"></div>
          <div className="stars1"></div>
          <div className="stars2"></div>
          <div className="shooting-stars"></div>
        </div>
      </div>
      <div className="z">
        <div className="row a">
          <Nav className="justify-content-center ab" activeKey="/home">
            <Nav.Item>
              <Nav.Link className="abc" href="/">
                MAİN
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="abc" href="/about">
                ABOUT
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="abc" href="/resume">
                RESUME
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="abc" href="/projects">
                PROJECTS
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="abc" href="/contact">
                CONTACT
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>
    </>
  );
}
