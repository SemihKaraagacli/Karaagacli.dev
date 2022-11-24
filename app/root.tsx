import type { MetaFunction } from "@remix-run/node";
import { Links, Meta, Outlet, Scripts } from "@remix-run/react";

import bootstrapStyles from "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/app.css";
import frontStyle from "./styles/frontStyle.css";
export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: bootstrapStyles },
    { rel: "stylesheet", href: frontStyle },
  ];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <Scripts />
      </head>
      <body>
        <Outlet />
      </body>
    </html>
  );
}
