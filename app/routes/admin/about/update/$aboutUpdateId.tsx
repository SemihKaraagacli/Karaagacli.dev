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
import { aboutFindPost, aboutUpdatePost } from "~/models/post.server";
import type { about } from "@prisma/client";
import { Form } from "@remix-run/react";
import background from "public/images/background.jpg";
import { authenticator } from "~/models/auth.server";
import bcrypt from "bcryptjs";
export function links() {
  return [{ rel: "stylesheet", href: admin }];
}
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Home-Create",
  viewport: "width=device-width,initial-scale=1",
});

type loaderData = { about: about };

export const loader: LoaderFunction = async ({ params, request }) => {
  await authenticator.isAuthenticated(request, { failureRedirect: "/admin/" });
  const id = params.aboutUpdateId;
  const post = await aboutFindPost(parseInt(id!));
  if (!post) {
    return redirect("/admin/about");
  }
  const data: loaderData = {
    about: post,
  };
  return json(data);
};

export const action: ActionFunction = async ({ request, params }) => {
  const uploadHandler = unstable_composeUploadHandlers(
    unstable_createFileUploadHandler({
      directory: "public/images/profil-image",
      maxPartSize: 5_000_000,
      file: ({ filename }) => filename,
    }),
    unstable_createMemoryUploadHandler()
  );
  const formData = await unstable_parseMultipartFormData(
    request,
    uploadHandler
  );
  const id = params.aboutUpdateId;
  const aboutWrite = formData.get("aboutWrite");
  const instagram = formData.get("instagram");
  const twitter = formData.get("twitter");
  const github = formData.get("github");
  const linkedin = formData.get("linkedin");
  const google = formData.get("google");

  const deger = {
    aboutWrite,
    instagram,
    twitter,
    github,
    linkedin,
    google,
  } as any;

  if (formData.get("profilImageName").name != "") {
    deger.profilImageName = (formData.get("profilImageName") as any).name;
  }

  await aboutUpdatePost(parseInt(id!), deger);
  return redirect(`/admin/about`);
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
            href="/admin/main"
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
            <textarea
              itemType="text"
              name="aboutWrite"
              className="form-control mb-4"
              defaultValue={data.about.aboutWrite!}
              placeholder="About Write Add"
            ></textarea>
            <input
              type="file"
              name="profilImageName"
              className="form-control mb-4"
              defaultValue={data.about.profilImageName!}
            />
            <input
              type="text"
              name="instagram"
              placeholder="İnstagram"
              className="form-control mb-4"
              defaultValue={data.about.instagram!}
            />
            <input
              type="text"
              name="twitter"
              placeholder="Twitter"
              className="form-control mb-4"
              defaultValue={data.about.twitter!}
            />
            <input
              type="text"
              name="github"
              placeholder="Github"
              className="form-control mb-4"
              defaultValue={data.about.github!}
            />
            <input
              type="text"
              name="linkedin"
              placeholder="Linkedin"
              className="form-control mb-4"
              defaultValue={data.about.linkedin!}
            />
            <input
              type="text"
              name="google"
              placeholder="Google"
              className="form-control"
              defaultValue={data.about.google!}
            />
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
