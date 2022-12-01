import { MetaFunction, redirect } from "@remix-run/node";
import admin from "~/styles/admin.css";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { languagesDeletePost, languagesFindPost } from "~/models/post.server";
import type { languages } from "@prisma/client";

export function links() {
  return [{ rel: "stylesheet", href: admin }];
}
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Home-Create",
  viewport: "width=device-width,initial-scale=1",
});

type loaderData = { language: languages };

export const loader: LoaderFunction = async ({ params }) => {
  const id = params.languageDeleteId;
  const post = await languagesFindPost(parseInt(id!));
  if (!post) {
    return redirect("/admin/language");
  }
  const data: loaderData = {
    language: post,
  };
  languagesDeletePost(data.language.id);
  return redirect("/admin/language");
};

export default function Delete() {
  const data = useLoaderData<loaderData>();
  return <></>;
}
