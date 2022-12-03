import { Nav, Table } from "react-bootstrap";
import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import admin from "~/styles/admin.css";
import { useLoaderData } from "@remix-run/react";
import type { projects } from "@prisma/client";
import { db } from "~/utils/db.server";
import background from "public/images/background.jpg";
import { authenticator } from "~/models/auth.server";
export function links() {
  return [{ rel: "stylesheet", href: admin }];
}
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Home",
  viewport: "width=device-width,initial-scale=1",
});

type loaderData = { project: Array<projects> };

export const loader: LoaderFunction = async ({ request }) => {
  await authenticator.isAuthenticated(request, { failureRedirect: "/admin/" });

  const data: loaderData = {
    project: await db.projects.findMany(),
  };
  return json(data);
};

export default function Index() {
  const data = useLoaderData<loaderData>();
  return (
    <>
      <img className="home-img" src={background} alt="" />

      <div className="home">
        <div className="home-navbar">
          <Nav className=" navi" activeKey="/home">
            <div className="navii">
              <Nav.Item>
                <Nav.Link className="navi-link" href="/admin/main">
                  MAİN
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navi-link" href="/admin/about">
                  ABOUT
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navi-link" href="/admin/education">
                  EDUCATİON
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navi-link" href="/admin/experiance">
                  EXPERİANCE
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navi-link" href="/admin/framework">
                  FRAMEWORK
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navi-link" href="/admin/language">
                  LANGUAGE
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navi-link" href="/admin/other">
                  OTHER
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navi-link" href="/admin/projects">
                  PROJECTS
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navi-link" href="/admin/contact">
                  CONTACT
                </Nav.Link>
              </Nav.Item>
            </div>
            <Nav.Item>
              <Nav.Link className="exit" href="/">
                <FontAwesomeIcon icon={faRightFromBracket} />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="home-tables">
          <Table striped bordered hover variant="dark">
            <thead className="text-center">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Projects İmage</th>
                <th>Adress</th>
                <th>Comment</th>
                <th>-</th>
                <th>-</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {data.project
                .sort((a, b) => a.id - b.id)
                .map((projects) => (
                  <tr>
                    <td key={projects.id}>{projects.id}</td>
                    <td key={projects.id}>{projects.name}</td>
                    <td key={projects.id}>
                      <div className="flex flex-col items-center justify-center">
                        <img
                          className="w-13 h-12 relative"
                          src={`/images/project-image/${projects.projectImageName}`}
                          alt=""
                        />
                      </div>
                    </td>
                    <td key={projects.id}>{projects.adress}</td>
                    <td key={projects.id}>{projects.comment}</td>
                    <td>
                      <div className="flex flex-col items-center ">
                        <a
                          className="remove"
                          href={`/admin/projects/delete/${projects.id}`}
                        >
                          Remove
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="flex flex-col items-center">
                        <a
                          className="update"
                          href={`/admin/projects/update/${projects.id}`}
                        >
                          Update
                        </a>
                      </div>
                    </td>
                  </tr>
                ))
                .reverse()}
            </tbody>
          </Table>
        </div>
        <a className="create" href="/admin/projects/create/create">
          Create
        </a>
      </div>
    </>
  );
}
