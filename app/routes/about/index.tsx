import {
  faInstagram,
  faGithub,
  faLinkedinIn,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import { Nav } from "react-bootstrap";
import avatar from "public/images/profil-image/avatar.jpg";
import { about } from "@prisma/client";
import { db } from "~/utils/db.server";
import { useLoaderData } from "@remix-run/react";
import about from "../admin/about";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "About",
  viewport: "width=device-width,initial-scale=1",
});

type loaderData = { abouts: Array<about> };

export const loader: LoaderFunction = async () => {
  const data: loaderData = {
    abouts: await db.about.findMany(),
  };
  return json(data);
};

export default function Index() {
  const data = useLoaderData<loaderData>();
  return (
    <>
      <div className="a">
        <Nav className="justify-content-center ab">
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

      {data.abouts
        .sort((a, b) => a.id - b.id)
        .map((about) => (
          <div className="col-12 co">
            <div className="column-1">
              <div className="page-head gap-2">
                <FontAwesomeIcon className="head-icon" icon={faChevronRight} />
                HAKKIMDA
              </div>
              <div key={about.id} className="info">
                {about.aboutWrite}
              </div>
            </div>
            <div className="column-2">
              <img
                key={about.id}
                className="avatar"
                src={`/images/profil-image/${about.profilImageName}`}
                alt="avatar"
              />
              <div className="name">Semih KARAAĞAÇLI</div>
              <div className="social-media">
                <a key={about.id} className="" href={about.instagram!}>
                  <FontAwesomeIcon className="sm-icon" icon={faInstagram} />
                </a>
                <a key={about.id} className="" href={about.twitter!}>
                  <FontAwesomeIcon className="sm-icon" icon={faTwitter} />
                </a>
                <a key={about.id} className="" href={about.linkedin!}>
                  <FontAwesomeIcon className="sm-icon" icon={faLinkedinIn} />
                </a>
                <a key={about.id} className="" href={about.github!}>
                  <FontAwesomeIcon className="sm-icon" icon={faGithub} />
                </a>
                <a key={about.id} className="" href={about.google!}>
                  <FontAwesomeIcon className="sm-icon" icon={faGoogle} />
                </a>
              </div>
            </div>
          </div>
        ))}
      {/* <div className="column-1">
          <div className="page-head gap-2">
            <FontAwesomeIcon className="head-icon" icon={faChevronRight} />
            HAKKIMDA
          </div>
          <div className="info">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their
          </div>
        </div> */}
      {/* <div className="column-2">
          <img className="avatar" src={avatar} alt="avatar" />
          <div className="name">Semih KARAAĞAÇLI</div>
          <div className="social-media">
            <a className="" href="#">
              <FontAwesomeIcon className="sm-icon" icon={faInstagram} />
            </a>
            <a className="" href="#">
              <FontAwesomeIcon className="sm-icon" icon={faTwitter} />
            </a>
            <a className="" href="#">
              <FontAwesomeIcon className="sm-icon" icon={faLinkedinIn} />
            </a>
            <a className="" href="#">
              <FontAwesomeIcon className="sm-icon" icon={faGithub} />
            </a>
            <a className="" href="#">
              <FontAwesomeIcon className="sm-icon" icon={faGoogle} />
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
}
