import {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
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
import { Form, Nav } from "react-bootstrap";
import admin from "~/styles/admin.css";
import { redirect } from "@remix-run/node";
import { aboutCreatePost, projectCreatePost } from "~/models/post.server";
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

export const loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/admin/",
  });
};

export const action: ActionFunction = async ({ request }) => {
  const uploadHandler = unstable_composeUploadHandlers(
    unstable_createFileUploadHandler({
      directory: "public/images/project-image",
      maxPartSize: 5_000_000,
      file: ({ filename }) => filename,
    }),
    unstable_createMemoryUploadHandler()
  );
  const formData = await unstable_parseMultipartFormData(
    request,
    uploadHandler
  );
  const name = formData.get("name");
  const projectImageName = (formData.get("projectImageName") as any).name;
  const adress = formData.get("adress");
  const comment = formData.get("comment");

  await projectCreatePost({
    name,
    projectImageName,
    adress,
    comment,
  });
  return redirect("/admin/projects");
};

export default function Index() {
  return (
    <>
      <img className="home-img" src={background} alt="" />
      <div className="home">
        <div className="home-navbar">
          <Nav className=" navi" activeKey="/home">
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
          <div className="head-name">Create</div>
          <a
            className="flex flex-row items-center gap-1 no-underline"
            href="../"
          >
            <div className="head-icon-name">Geri</div>
            <FontAwesomeIcon className="head-icon" icon={faAnglesRight} />
          </a>
        </div>

        <Form
          className="flex flex-col items-center px-32"
          method="post"
          // action=""
          encType="multipart/form-data"
        >
          <input
            type="text"
            name="name"
            placeholder="name"
            className="form-control mb-4"
          />
          <input
            type="file"
            name="projectImageName"
            className="form-control mb-4"
          />
          <input
            type="text"
            name="adress"
            placeholder="adress"
            className="form-control mb-4"
          />
          <textarea
            itemType="text"
            name="comment"
            className="form-control mb-4"
            placeholder="comment"
          ></textarea>

          <button
            itemType="submit"
            className="block bg-indigo-800 px-4 py-1 mt-4 rounded-md mb-7"
          >
            Save
          </button>
        </Form>
      </div>
    </>
  );
}
