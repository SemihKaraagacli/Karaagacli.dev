import {
  ActionFunction,
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
import { aboutCreatePost } from "~/models/post.server";

export function links() {
  return [{ rel: "stylesheet", href: admin }];
}
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Home-Create",
  viewport: "width=device-width,initial-scale=1",
});

export const action: ActionFunction = async ({ request }) => {
  const uploadHandler = unstable_composeUploadHandlers(
    unstable_createFileUploadHandler({
      maxPartSize: 5_000_000,
      file: ({ filename }) => filename,
    }),
    // parse everything else into memory
    unstable_createMemoryUploadHandler()
  );
  const formData = await unstable_parseMultipartFormData(
    request,
    uploadHandler
  );
  console.log(formData);
  // const formData1 = await request.formData();
  const aboutWrite = formData.get("aboutWrite");
  const profilImageName = formData.get("profilImageName");
  const instagram = formData.get("instagram");
  const twitter = formData.get("twitter");
  const github = formData.get("github");
  const linkedin = formData.get("linkedin");
  const google = formData.get("google");

  await aboutCreatePost({
    aboutWrite,
    profilImageName,
    instagram,
    twitter,
    github,
    linkedin,
    google,
  });
  return redirect("/admin/about");
};

export default function Index() {
  return (
    <>
      <img className="home-img" src={require("~/images/a.jpg")} alt="" />
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
          <textarea
            itemType="text"
            name="aboutWrite"
            className="form-control mb-4"
            placeholder="About Write Add"
          ></textarea>
          <input
            type="file"
            name="profilImageName"
            className="form-control mb-4"
          />
          <input
            type="text"
            name="instagram"
            placeholder="İnstagram"
            className="form-control mb-4"
          />
          <input
            type="text"
            name="twitter"
            placeholder="Twitter"
            className="form-control mb-4"
          />
          <input
            type="text"
            name="github"
            placeholder="Github"
            className="form-control mb-4"
          />
          <input
            type="text"
            name="linkedin"
            placeholder="Linkedin"
            className="form-control mb-4"
          />
          <input
            type="text"
            name="google"
            placeholder="Google"
            className="form-control"
          />
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
