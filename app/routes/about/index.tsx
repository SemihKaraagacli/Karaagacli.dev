import {
  faInstagram,
  faGithub,
  faLinkedinIn,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { MetaFunction } from "@remix-run/node";
import { Nav } from "react-bootstrap";
import avatar from "~/images/avatar-images/avatar.jpg";
import React from "react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "About",
  viewport: "width=device-width,initial-scale=1",
});

export default function Index() {
  return (
    <>
      <div className="a">
        <Nav className="justify-content-center ab">
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
      <div className="col-12 co">
        <div className="column-1">
          <div className="page-head gap-2">
            <FontAwesomeIcon className="head-icon" icon={faChevronRight} />
            HAKKIMDA
          </div>
          <div className="info">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their
          </div>
        </div>
        <div className="column-2">
          <img className="avatar" src={avatar} alt="avatar" />
          <div className="name">Semih KARAAĞAÇLI</div>
          <div className="social-media">
            <a className="" href="#">
              <FontAwesomeIcon className="sm-icon" icon={faInstagram} />
            </a>
            <a className="" href="#">
              <FontAwesomeIcon className="sm-icon" icon={faTwitter} />
            </a>
            <a className="" href="#">
              <FontAwesomeIcon className="sm-icon" icon={faLinkedinIn} />
            </a>
            <a className="" href="#">
              <FontAwesomeIcon className="sm-icon" icon={faGithub} />
            </a>
            <a className="" href="#">
              <FontAwesomeIcon className="sm-icon" icon={faGoogle} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
