import {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
  redirect,
} from "@remix-run/node";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFingerprint } from "@fortawesome/free-solid-svg-icons";
import admin from "~/styles/admin.css";
import background from "public/images/background.jpg";
import { Form } from "react-bootstrap";
import { authenticator } from "~/models/auth.server";
export function links() {
  return [{ rel: "stylesheet", href: admin }];
}
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Main",
  viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/admin/main/",
  });
};

export const action: ActionFunction = async ({ request }) => {
  const a = await authenticator.authenticate("AdminPanel", request, {
    successRedirect: "/admin/main/",
    failureRedirect: "/admin/",
  });
  console.log(">>>>>>", a);
  return a;
};

export default function Index() {
  return (
    <>
      <img className="home-img" src={background} alt="" />
      <div className="c">
        <div className="login-box">
          <div className="login-cimetry">
            <div className="login-head gap-2">
              <FontAwesomeIcon className="login-icon" icon={faFingerprint} />
              <div className="login-icon-name">LOGIN</div>
            </div>
            <Form className="formm" method="post" action="/admin/?index">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                required
              />
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                required
              />
              <button type="submit"> Giriş</button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
