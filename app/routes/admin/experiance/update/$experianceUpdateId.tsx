import {
  ActionFunction,
  json,
  MetaFunction,
  redirect,
  unstable_composeUploadHandlers,
  unstable_createFileUploadHandler,
  unstable_createMemoryUploadHandler,
  unstable_parseMultipartFormData,
} from "@remix-run/node";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import { Nav } from "react-bootstrap";
import admin from "~/styles/admin.css";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { experianceFindPost, experianceUpdatePost } from "~/models/post.server";
import type { resumeJob } from "@prisma/client";
import { Form } from "@remix-run/react";
import background from "public/images/background.jpg";
import { authenticator } from "~/models/auth.server";
export function links() {
  return [{ rel: "stylesheet", href: admin }];
}
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Home-Create",
  viewport: "width=device-width,initial-scale=1",
});

type loaderData = { jobs: resumeJob };

export const loader: LoaderFunction = async ({ params, request }) => {
  await authenticator.isAuthenticated(request, { failureRedirect: "/admin/" });

  const id = params.experianceUpdateId;
  const post = await experianceFindPost(parseInt(id!));
  if (!post) {
    return redirect("/admin/experiance");
  }
  const data: loaderData = {
    jobs: post,
  };
  return json(data);
};

export const action: ActionFunction = async ({ request, params }) => {
  const id = params.experianceUpdateId;
  const formData = await request.formData();
  const name = formData.get("name");
  const date = formData.get("date");
  const department = formData.get("department");
  const explanation = formData.get("explanation");

  const deger = {
    name,
    date,
    department,
    explanation,
  } as any;

  await experianceUpdatePost(parseInt(id!), deger);
  return redirect(`/admin/experiance`);
};
export default function Update() {
  const data = useLoaderData<loaderData>();
  return (
    <>
      <img className="home-img" src={background} alt="" />
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
        <div className="head-row">
          <div className="head-name">Update</div>
          <a
            className="flex flex-row items-center gap-1 no-underline"
            href="../"
          >
            <div className="head-icon-name">Geri</div>
            <FontAwesomeIcon className="head-icon" icon={faAnglesRight} />
          </a>
        </div>
        <div className="inputs">
          <Form
            className="flex flex-col items-center px-32"
            method="post"
            // action=""
            encType="multipart/form-data"
          >
            <input
              type="text"
              name="name"
              className="form-control mb-4"
              defaultValue={data.jobs.name!}
            />
            <input
              type="text"
              name="date"
              placeholder="date"
              className="form-control mb-4"
              defaultValue={data.jobs.date!}
            />
            <input
              type="text"
              name="department"
              placeholder="department"
              className="form-control mb-4"
              defaultValue={data.jobs.department!}
            />
            <textarea
              itemType="text"
              name="explanation"
              className="form-control mb-4"
              defaultValue={data.jobs.explanation!}
              placeholder="explanation"
            ></textarea>
            <button
              itemType="submit"
              className="block bg-indigo-800 px-4 py-1 mt-4 rounded-md mb-7"
            >
              Save
            </button>
          </Form>
        </div>
      </div>
    </>
  );
}
