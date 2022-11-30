import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Nav } from "react-bootstrap";
import { MetaFunction } from "@remix-run/node";

import auto from "public/images/project-image/auto.jpg";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Projects",
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
      <div className="projects">
        <div className="page-head gap-2">
          <FontAwesomeIcon className="head-icon" icon={faChevronRight} />
          PROJELER
        </div>
        <div className="self-2">
          <div className="projects-info gap-3">
            <a className="projects-adress" href="https://github.com/">
              <div className="f">
                <img src={auto} alt="" className="auto" />
                <div className="project-name">Project One Test</div>
                <div className="project-comment">Web Development</div>
              </div>
            </a>
            <a className="projects-adress" href="https://github.com/">
              <div className="f">
                <img src={auto} alt="" className="auto" />
                <div className="project-name">Project One Test</div>
                <div className="project-comment">Web Development</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
