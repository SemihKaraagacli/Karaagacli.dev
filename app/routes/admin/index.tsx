import { MetaFunction } from "@remix-run/node";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFingerprint } from "@fortawesome/free-solid-svg-icons";
import admin from "~/styles/admin.css";

export function links() {
  return [{ rel: "stylesheet", href: admin }];
}
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Main",
  viewport: "width=device-width,initial-scale=1",
});

export default function Index() {
  return (
    <>
      <img src={require("~/images/a.jpg")} alt="ima" />
      <div className="c">
        <div className="login-box">
          <div className="login-cimetry">
            <div className="login-head gap-2">
              <FontAwesomeIcon className="login-icon" icon={faFingerprint} />
              <div className="login-icon-name">LOGIN</div>
            </div>
            <form className="formm" action="">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
              />
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <button itemType="summit"> Giriş</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
