import { Nav } from "react-bootstrap";
import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import t from "../styles/style.css";
import { main } from "@prisma/client";
import { db } from "~/utils/db.server";
import main from "./admin/main";

export function links() {
  return [{ rel: "stylesheet", href: t }];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Main",
  viewport: "width=device-width,initial-scale=1",
});

type loaderData = { mains: Array<main> };

export const loader: LoaderFunction = async () => {
  const data: loaderData = {
    mains: await db.main.findMany(),
  };
  return json(data);
};

export default function Index() {
  const data = useLoaderData<loaderData>();
  return (
    <>
      <div className="">
        <div className="sky">
          {data.mains
            .sort((a, b) => a.id - b.id)
            .map((main) => (
              <div key={main.id} className="text">
                {main.welcomeWrite}
              </div>
            ))}
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
