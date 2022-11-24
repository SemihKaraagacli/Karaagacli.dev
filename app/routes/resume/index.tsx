import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faGraduationCap,
  faSuitcase,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Resume",
  viewport: "width=device-width,initial-scale=1",
});

export default function Index() {
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

      <div className="resume">
        <div className="page-head gap-2">
          <FontAwesomeIcon className="head-icon" icon={faChevronRight} />
          ÖZGEÇMİŞ
        </div>

        <div className="column-3">
          <div className="col-md-6">
            <div className="school">
              <div className="school-head gap-2">
                <FontAwesomeIcon
                  className="resume-icon-school"
                  icon={faGraduationCap}
                />
                <div className="school-title-name">EĞİTİM</div>
              </div>
              <div className="line"></div>
              <div className="circle"></div>
              <div className="school-info">
                <div className="resume-name">
                  Ankara Üniversitesi Gama Meslek Yüksekokulu
                </div>
                <div className="resume-date">2018 - 2020</div>
                <div className="resume-department">
                  Biyomedikal Cihaz Teknolojileri
                </div>
                <div className="resume-explanation">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="job">
              <div className="job-head gap-2">
                <FontAwesomeIcon
                  className="resume-icon-job"
                  icon={faSuitcase}
                />
                <div className="job-title-name">DENEYİM</div>
              </div>
              <div className="line"></div>
              <div className="circle"></div>
              <div className="job-info">
                <div className="resume-name">
                  Ankara Üniversitesi Gama Meslek Yüksekokulu
                </div>
                <div className="resume-date">2018 - 2020</div>
                <div className="resume-department">
                  Biyomedikal Cihaz Teknolojileri
                </div>
                <div className="resume-explanation">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column-4">
          <div className="ability">
            <div className="ability-head gap-2">
              <FontAwesomeIcon className="ability-icon-job" icon={faMedal} />
              <div className="ability-title-name">YETENEKLER</div>
            </div>
          </div>
          <div className="ability-info">
            <div className="col-md-4">
              <div className="language">Languages</div>
              <div className="self gap-1">
                <div className="ability-circle"></div>
                <div className="language-info">HTML5</div>
              </div>
              <div className="self gap-1">
                <div className="ability-circle"></div>
                <div className="language-info">CSS</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="framework">Frameworks</div>
              <div className="self gap-1">
                <div className="ability-circle"></div>
                <div className="framework-info">NodeJs</div>
              </div>
              <div className="self gap-1">
                <div className="ability-circle"></div>
                <div className="framework-info">Typescript</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="others">Others</div>
              <div className="self gap-1">
                <div className="ability-circle"></div>
                <div className="others-info">Adobe Illustrator</div>
              </div>
              <div className="self gap-1">
                <div className="ability-circle"></div>
                <div className="others-info">Figma</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
