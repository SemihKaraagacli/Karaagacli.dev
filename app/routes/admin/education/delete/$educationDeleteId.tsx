import { MetaFunction, redirect } from "@remix-run/node";
import admin from "~/styles/admin.css";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { educationDeletePost, educationFindPost } from "~/models/post.server";
import type { resumeSchool } from "@prisma/client";
import { authenticator } from "~/models/auth.server";

export function links() {
  return [{ rel: "stylesheet", href: admin }];
}
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Home-Create",
  viewport: "width=device-width,initial-scale=1",
});

type loaderData = { schools: resumeSchool };

export const loader: LoaderFunction = async ({ params, request }) => {
  await authenticator.isAuthenticated(request, { failureRedirect: "/admin/" });

  const id = params.educationDeleteId;
  const post = await educationFindPost(parseInt(id!));
  if (!post) {
    return redirect("/admin/about");
  }
  const data: loaderData = {
    schools: post,
  };
  educationDeletePost(data.schools.id);
  return redirect("/admin/education");
};

export default function Delete() {
  const data = useLoaderData<loaderData>();
  return <></>;
}
