import { ActionFunction, json, MetaFunction, redirect } from "@remix-run/node";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import { Nav } from "react-bootstrap";
import admin from "~/styles/admin.css";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { contactFindPost, contactUpdatePost } from "~/models/post.server";
import type { contact } from "@prisma/client";
import { Form } from "@remix-run/react";
import background from "public/images/background.jpg";
export function links() {
  return [{ rel: "stylesheet", href: admin }];
}
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Home-Create",
  viewport: "width=device-width,initial-scale=1",
});

type loaderData = { contact: contact };

export const loader: LoaderFunction = async ({ params }) => {
  await authenticator.isAuthenticated(request, { failureRedirect: "/admin/" });
  const id = params.contactUpdateId;
  const post = await contactFindPost(parseInt(id!));
  if (!post) {
    return redirect("/admin/contact");
  }
  const data: loaderData = {
    contact: post,
  };
  return json(data);
};

export const action: ActionFunction = async ({ request, params }) => {
  const id = params.contactUpdateId;
  const formData = await request.formData();
  const name = formData.get("name");
  const adressName = formData.get("adressName");
  const adressWebAdress = formData.get("adressWebAdress");
  const google = formData.get("google");

  const deger = {
    name,
    adressName,
    adressWebAdress,
    google,
  } as any;

  await contactUpdatePost(parseInt(id!), deger);
  return redirect(`/admin/contact`);
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
              defaultValue={data.contact.name!}
            />
            <input
              type="text"
              name="adressName"
              placeholder="adressName"
              className="form-control mb-4"
              defaultValue={data.contact.adressName!}
            />
            <input
              type="text"
              name="adressWebAdress"
              placeholder="adressWebAdress"
              className="form-control mb-4"
              defaultValue={data.contact.adressWebAdress!}
            />
            <input
              type="text"
              name="google"
              className="form-control mb-4"
              defaultValue={data.contact.google!}
              placeholder="google"
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
