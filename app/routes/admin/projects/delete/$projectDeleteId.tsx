import { MetaFunction, redirect } from "@remix-run/node";
import admin from "~/styles/admin.css";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { projectDeletePost, projectFindPost } from "~/models/post.server";
import type { projects } from "@prisma/client";
import { authenticator } from "~/models/auth.server";

export function links() {
  return [{ rel: "stylesheet", href: admin }];
}
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Home-Create",
  viewport: "width=device-width,initial-scale=1",
});

type loaderData = { projects: projects };

export const loader: LoaderFunction = async ({ params, request }) => {
  await authenticator.isAuthenticated(request, { failureRedirect: "/admin/" });

  const id = params.projectDeleteId;
  const post = await projectFindPost(parseInt(id!));
  if (!post) {
    return redirect("/admin/projects");
  }
  const data: loaderData = {
    projects: post,
  };
  projectDeletePost(data.projects.id);
  return redirect("/admin/projects");
};

export default function Delete() {
  const data = useLoaderData<loaderData>();
  return <></>;
}
