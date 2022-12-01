import { MetaFunction, redirect } from "@remix-run/node";
import admin from "~/styles/admin.css";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { othersDeletePost, othersFindPost } from "~/models/post.server";
import type { others } from "@prisma/client";

export function links() {
  return [{ rel: "stylesheet", href: admin }];
}
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Home-Create",
  viewport: "width=device-width,initial-scale=1",
});

type loaderData = { other: others };

export const loader: LoaderFunction = async ({ params }) => {
  const id = params.otherDeleteId;
  const post = await othersFindPost(parseInt(id!));
  if (!post) {
    return redirect("/admin/other");
  }
  const data: loaderData = {
    other: post,
  };
  othersDeletePost(data.other.id);
  return redirect("/admin/framework");
};

export default function Delete() {
  const data = useLoaderData<loaderData>();
  return <></>;
}
