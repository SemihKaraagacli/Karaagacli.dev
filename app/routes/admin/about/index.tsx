import { Nav, Table } from "react-bootstrap";
import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import admin from "~/styles/admin.css";
import { useLoaderData } from "@remix-run/react";
import type { about } from "@prisma/client";
import { db } from "~/utils/db.server";
import background from "public/images/background.jpg";
import { authenticator } from "~/models/auth.server";
import bcrypt from "bcryptjs";
export function links() {
  return [{ rel: "stylesheet", href: admin }];
}
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Home",
  viewport: "width=device-width,initial-scale=1",
});

type loaderData = { abouts: Array<about> };

export const loader: LoaderFunction = async ({ request }) => {
  await authenticator.isAuthenticated(request, { failureRedirect: "/admin/" });

  const data: loaderData = {
    abouts: await db.about.findMany(),
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
            <thead className="break-all text-center">
              <tr>
                <th>#</th>
                <th>AboutWrite</th>
                <th>ProfilImageName</th>
                <th>İnstagram</th>
                <th>Twitter</th>
                <th>Github</th>
                <th>Linkedin</th>
                <th>Google</th>
                <th>-</th>
                <th>-</th>
              </tr>
            </thead>
            <tbody className="text-center break-all">
              {data.abouts
                .sort((a, b) => a.id - b.id)
                .map((about) => (
                  <tr>
                    <td key={about.id}>{about.id}</td>
                    <td key={about.id}>{about.aboutWrite}</td>
                    <td key={about.id}>
                      <div className="flex flex-col items-center justify-center">
                        <img
                          className="w-13 h-12 relative"
                          src={`/images/profil-image/${about.profilImageName}`}
                          alt=""
                        />
                      </div>
                    </td>
                    <td key={about.id}>{about.instagram}</td>
                    <td key={about.id}>{about.twitter}</td>
                    <td key={about.id}>{about.github}</td>
                    <td key={about.id}>{about.linkedin}</td>
                    <td key={about.id}>{about.google}</td>
                    <td>
                      <div className="flex flex-col items-center ">
                        <a
                          className="remove"
                          href={`/admin/about/delete/${about.id}`}
                        >
                          Remove
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="flex flex-col items-center">
                        <a
                          className="update"
                          href={`/admin/about/update/${about.id}`}
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
        <a className="create" href="/admin/about/create/create">
          Create
        </a>
      </div>
    </>
  );
}
