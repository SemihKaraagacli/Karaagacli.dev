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
              ANASAYFA
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="abc" href="/about">
              HAKKIMDA
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="abc" href="/resume">
              ÖZGEÇMİŞ
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="abc" href="/projects">
              PROJELER
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="abc" href="/contact">
              İLETİŞİM
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
                <p>{about.aboutWrite}</p>
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
        ))
        .reverse()}
    </>
  );
}
