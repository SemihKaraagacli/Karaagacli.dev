import { json, MetaFunction, redirect } from "@remix-run/node";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import { Nav } from "react-bootstrap";
import admin from "~/styles/admin.css";
import { useLoaderData} from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { deletePost, findPost, updatePost } from "~/models/post.server";
import type { main } from "@prisma/client";
import { Form } from "@remix-run/react";
import { parseArgs } from "util";

export function links() {
  return [{ rel: "stylesheet", href: admin }];
}
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Home-Create",
  viewport: "width=device-width,initial-scale=1",
});

type loaderData = { main: main };

export const loader: LoaderFunction = async ({ params }) => {
  const id = params.deleteId;
  const post = await findPost(parseInt(id!));
  if (!post) {
    return redirect("/admin/main");
  }
  const data: loaderData = {
    main: post,
  };
  deletePost(data.main.id)
  return redirect("/admin/main") ;
};

export default function Delete() {
  const data = useLoaderData<loaderData>();
  return (
    <>
      {/* <img className="home-img" src={require("~/images/a.jpg")} alt="" />
      <div className="home">
        <div className="home-navbar">
          <Nav className=" navi">
            <div className="navii">
              <Nav.Item>
                <Nav.Link className="navi-link" href="/admin/home">
                  MAİN
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navi-link" href="/admin/about">
                  ABOUT
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navi-link" href="/admin/resume">
                  RESUME
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
        <div className="head-row">
          <div className="head-name">Update</div>
          <a
            className="flex flex-row items-center gap-1 no-underline"
            href="/admin/main"
          >
            <div className="head-icon-name">Geri</div>
            <FontAwesomeIcon className="head-icon" icon={faAnglesRight} />
          </a>
        </div>
        <div className="inputs">
          <Form className="flex flex-col items-center px-32" method="post">
            <textarea
              name="welcomeWrite"
              className="form-control"
              placeholder="Welcome Write Add"
              defaultValue={data.main.welcomeWrite!}
            ></textarea>
            <button
              type="submit"
              className="block bg-indigo-800 px-4 py-1 mt-4 rounded-md"
            >
              Save '{data.main.id}'
            </button>
          </Form>
        </div>
      </div> */}
    </>
  );
}
