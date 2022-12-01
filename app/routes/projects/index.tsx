import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Nav } from "react-bootstrap";
import { json, LoaderFunction, MetaFunction } from "@remix-run/node";

import auto from "public/images/project-image/auto.jpg";
import { projects } from "@prisma/client";
import { db } from "~/utils/db.server";
import { useLoaderData } from "@remix-run/react";
import projects from "../admin/projects";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Projects",
  viewport: "width=device-width,initial-scale=1",
});

type loaderData = { project: Array<projects> };

export const loader: LoaderFunction = async () => {
  const data: loaderData = {
    project: await db.projects.findMany(),
  };
  return json(data);
};

export default function Index() {
  const data = useLoaderData<loaderData>();
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
            {data.project
              .sort((a, b) => a.id - b.id)
              .map((projects) => (
                <>
                  <a
                    key={projects.id}
                    className="projects-adress"
                    href={projects.adress!}
                  >
                    <div className="f">
                      <img
                        key={projects.id}
                        src={`/images/project-image/${projects.projectImageName}`}
                        alt=""
                        className="auto"
                      />
                      <div key={projects.id} className="project-name">
                        {projects.name}
                      </div>
                      <div key={projects.id} className="project-comment">
                        {projects.comment}
                      </div>
                    </div>
                  </a>
                </>
              ))
              .reverse()}
          </div>
        </div>
      </div>
    </>
  );
}
