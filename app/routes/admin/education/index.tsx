import { Nav, Table } from "react-bootstrap";
import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import admin from "~/styles/admin.css";
import { useLoaderData } from "@remix-run/react";
import type { resumeSchool } from "@prisma/client";
import { db } from "~/utils/db.server";
import background from "public/images/background.jpg";
export function links() {
  return [{ rel: "stylesheet", href: admin }];
}
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Home",
  viewport: "width=device-width,initial-scale=1",
});

type loaderData = { school: Array<resumeSchool> };

export const loader: LoaderFunction = async () => {
  const data: loaderData = {
    school: await db.resumeSchool.findMany(),
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
                <th>Date</th>
                <th>Department</th>
                <th>Explanation</th>
                <th>-</th>
                <th>-</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {data.school
                .sort((a, b) => a.id - b.id)
                .map((resumeSchool) => (
                  <tr>
                    <td key={resumeSchool.id}>{resumeSchool.id}</td>
                    <td key={resumeSchool.id}>{resumeSchool.name}</td>
                    <td key={resumeSchool.id}>{resumeSchool.date}</td>
                    <td key={resumeSchool.id}>{resumeSchool.department}</td>
                    <td key={resumeSchool.id}>{resumeSchool.explanation}</td>
                    <td>
                      <div className="flex flex-col items-center ">
                        <a
                          className="remove"
                          href={`/admin/education/delete/${resumeSchool.id}`}
                        >
                          Remove
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="flex flex-col items-center">
                        <a
                          className="update"
                          href={`/admin/education/update/${resumeSchool.id}`}
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
        <a className="create" href="/admin/education/create/create">
          Create
        </a>
      </div>
    </>
  );
}
