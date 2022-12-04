import { ActionFunction, LoaderFunction, MetaFunction } from "@remix-run/node";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import { Form, Nav } from "react-bootstrap";
import admin from "~/styles/admin.css";
import { redirect } from "@remix-run/node";
import { contactCreatePost } from "~/models/post.server";
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
  const formData = await request.formData();
  const name = formData.get("name");
  const adressName = formData.get("adressName");
  const adressWebAdress = formData.get("adressWebAdress");
  const google = formData.get("google");

  await contactCreatePost({ name, adressName, adressWebAdress, google });
  return redirect("/admin/contact");
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
          //   action=""
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-control mb-4"
          />
          <input
            type="text"
            name="adressName"
            placeholder="adressName"
            className="form-control mb-4"
          />
          <input
            type="text"
            name="adressWebAdress"
            placeholder="adressWebAdress"
            className="form-control mb-4"
          />
          <input
            type="text"
            name="google"
            placeholder="google"
            className="form-control mb-4"
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
