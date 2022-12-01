import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faGraduationCap,
  faSuitcase,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import {
  frameworks,
  languages,
  others,
  resumeJob,
  resumeSchool,
} from "@prisma/client";
import { db } from "~/utils/db.server";
import { useLoaderData } from "@remix-run/react";
import education from "../admin/education";
import experiance from "../admin/experiance";
import language from "../admin/language";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Resume",
  viewport: "width=device-width,initial-scale=1",
});

type loaderData = {
  school: Array<resumeSchool>;
  job: Array<resumeJob>;
  framework: Array<frameworks>;
  language: Array<languages>;
  other: Array<others>;
};

export const loader: LoaderFunction = async () => {
  const data: loaderData = {
    school: await db.resumeSchool.findMany(),
    job: await db.resumeJob.findMany(),
    framework: await db.frameworks.findMany(),
    language: await db.languages.findMany(),
    other: await db.others.findMany(),
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
              {data.school
                .sort((a, b) => a.id - b.id)
                .map((education) => (
                  <div>
                    <div className="circle"></div>
                    <div className="school-info">
                      <div key={education.id} className="resume-name">
                        {education.name}
                      </div>
                      <div key={education.id} className="resume-date">
                        {education.date}
                      </div>
                      <div key={education.id} className="resume-department">
                        {education.department}
                      </div>
                      <div key={education.id} className="resume-explanation">
                        {education.explanation}
                      </div>
                    </div>
                  </div>
                ))
                .reverse()}
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
              {data.job
                .sort((a, b) => a.id - b.id)
                .map((experiance) => (
                  <div>
                    <div className="circle"></div>
                    <div className="job-info">
                      <div key={experiance.id} className="resume-name">
                        {experiance.name}
                      </div>
                      <div key={experiance.id} className="resume-date">
                        {experiance.date}
                      </div>
                      <div key={experiance.id} className="resume-department">
                        {experiance.department}
                      </div>
                      <div key={experiance.id} className="resume-explanation">
                        {experiance.explanation}
                      </div>
                    </div>
                  </div>
                ))}
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
              {data.language
                .sort((a, b) => a.id - b.id)
                .map((language) => (
                  <>
                    <div className="self gap-1">
                      <div className="ability-circle"></div>
                      <div key={language.id} className="language-info">
                        {language.name}
                      </div>
                    </div>
                  </>
                ))}
            </div>
            <div className="col-md-4">
              <div className="framework">Frameworks</div>
              {data.framework
                .sort((a, b) => a.id - b.id)
                .map((framework) => (
                  <>
                    <div className="self gap-1">
                      <div className="ability-circle"></div>
                      <div key={framework.id} className="language-info">
                        {framework.name}
                      </div>
                    </div>
                  </>
                ))}
            </div>
            <div className="col-md-4">
              <div className="others">Others</div>
              {data.other
                .sort((a, b) => a.id - b.id)
                .map((other) => (
                  <>
                    <div className="self gap-1">
                      <div className="ability-circle"></div>
                      <div key={other.id} className="language-info">
                        {other.name}
                      </div>
                    </div>
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
