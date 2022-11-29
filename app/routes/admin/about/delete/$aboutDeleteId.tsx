import { MetaFunction, redirect } from "@remix-run/node";
import admin from "~/styles/admin.css";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { aboutDeletePost, aboutFindPost } from "~/models/post.server";
import type { about } from "@prisma/client";

export function links() {
  return [{ rel: "stylesheet", href: admin }];
}
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Home-Create",
  viewport: "width=device-width,initial-scale=1",
});

type loaderData = { about: about };

export const loader: LoaderFunction = async ({ params }) => {
  const id = params.aboutDeleteId;
  const post = await aboutFindPost(parseInt(id!));
  if (!post) {
    return redirect("/admin/about");
  }
  const data: loaderData = {
    about: post,
  };
  aboutDeletePost(data.about.id);
  return redirect("/admin/about");
};

export default function Delete() {
  const data = useLoaderData<loaderData>();
  return <></>;
}
