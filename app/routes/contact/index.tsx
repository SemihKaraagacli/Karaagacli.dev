import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Nav, Row, Col, Form, Button } from "react-bootstrap";
import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import { contact } from "@prisma/client";
import { db } from "~/utils/db.server";
import { useLoaderData } from "@remix-run/react";
import contact from "../admin/contact";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Contact",
  viewport: "width=device-width,initial-scale=1",
});

type loaderData = { contact: Array<contact> };

export const loader: LoaderFunction = async () => {
  const data: loaderData = {
    contact: await db.contact.findMany(),
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
      <div className="contact">
        <div className="page-head gap-2">
          <FontAwesomeIcon className="head-icon" icon={faChevronRight} />
          İLETİŞİM
        </div>
        <div className="self-3">
          <div className="row">
            <div className="col-md-7">
              <Form>
                <Row className="cimetry-1">
                  <Col>
                    <Form.Control
                      style={{ backgroundColor: "#b3b3b3" }}
                      placeholder="İsim"
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      style={{ backgroundColor: "#b3b3b3" }}
                      placeholder="Soyisim"
                      disabled
                    />
                  </Col>
                </Row>
                <Row className="cimetry">
                  <Col>
                    <Form.Control
                      style={{ backgroundColor: "#b3b3b3" }}
                      placeholder="your@example.com"
                      disabled
                    />
                  </Col>
                </Row>
                <Row className="cimetry">
                  <Col>
                    <Form.Control
                      as="textarea"
                      placeholder="Düşünceleriniz için teşekkürler."
                      style={{ height: "200px ", backgroundColor: "#b3b3b3" }}
                      disabled
                    />
                  </Col>
                </Row>
                <Row className="cimetry">
                  <Col className="d">
                    <Button variant="primary" type="submit" disabled>
                      Gönder
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
            {data.contact
              .sort((a, b) => a.id - b.id)
              .map((contact) => (
                <>
                  <div className="col-md-5">
                    <div className="contact-info margin-1 gap-6">
                      <FontAwesomeIcon
                        className="contact-icon "
                        icon={faPhone}
                      />
                      <div className="contact-icon-info">
                        <div className="contact-icon-name">Telefon</div>
                        <div className="contact-name">+90 (5xx) xxx xx xx</div>
                      </div>
                    </div>
                    <div className="contact-info gap-6">
                      <FontAwesomeIcon
                        className="contact-icon"
                        icon={faEnvelope}
                      />
                      <div className="contact-icon-info">
                        <div className="contact-icon-name">Mail</div>
                        <a key={contact.id} href={contact.google!}>
                          <div className="contact-name">{contact.name}</div>
                        </a>
                      </div>
                    </div>
                    <div className="contact-info gap-6">
                      <FontAwesomeIcon
                        className="contact-icon"
                        icon={faMapMarkerAlt}
                      />
                      <div className="contact-icon-info">
                        <div className="contact-icon-name">Adres</div>
                        <a key={contact.id} href={contact.adressWebAdress!}>
                          <div className="contact-name">
                            {contact.adressName}
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1505.471757534164!2d39.730077!3d41.0046095!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40643c4467d413c3%3A0xe0d8e39ac277ba48!2sTrabzon%20Meydan%20Park%C4%B1!5e0!3m2!1sen!2str!4v1668979900446!5m2!1sen!2str"
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
