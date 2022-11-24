import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Nav, Row, Col, Form, Button } from "react-bootstrap";
import { MetaFunction } from "@remix-run/node";
import React from "react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Contact",
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
                    <Form.Control placeholder="İsim" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Soyisim" />
                  </Col>
                </Row>
                <Row className="cimetry">
                  <Col>
                    <Form.Control placeholder="your@example.com" />
                  </Col>
                </Row>
                <Row className="cimetry">
                  <Col>
                    <Form.Control
                      as="textarea"
                      placeholder="Düşünceleriniz için teşekkürler."
                      style={{ height: "200px " }}
                    />
                  </Col>
                </Row>
                <Row className="cimetry">
                  <Col className="d">
                    <Button variant="primary" type="submit">
                      Gönder
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
            <div className="col-md-5">
              <div className="contact-info margin-1 gap-6">
                <FontAwesomeIcon className="contact-icon " icon={faPhone} />
                <div className="contact-icon-info">
                  <div className="contact-icon-name">Telefon</div>
                  <div className="contact-name">+90 (5xx) xxx xx xx</div>
                </div>
              </div>
              <div className="contact-info gap-6">
                <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
                <div className="contact-icon-info">
                  <div className="contact-icon-name">Mail</div>
                  <a href="mailto:karaagaclisemih@gmail.com">
                    <div className="contact-name">
                      KaraagacliSemih@gmail.com
                    </div>
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
                  <a href="https://goo.gl/maps/cPh6TyaradfhrHLe9">
                    <div className="contact-name">Trabzon / TÜRKİYE</div>
                  </a>
                </div>
              </div>
            </div>
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
