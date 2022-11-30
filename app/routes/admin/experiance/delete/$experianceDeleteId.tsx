import { MetaFunction, redirect } from "@remix-run/node";
import admin from "~/styles/admin.css";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { experianceDeletePost, experianceFindPost } from "~/models/post.server";
import type { resumeJob } from "@prisma/client";

export function links() {
  return [{ rel: "stylesheet", href: admin }];
}
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Home-Create",
  viewport: "width=device-width,initial-scale=1",
});

type loaderData = { jobs: resumeJob };

export const loader: LoaderFunction = async ({ params }) => {
  const id = params.experianceDeleteId;
  const post = await experianceFindPost(parseInt(id!));
  if (!post) {
    return redirect("/admin/experiance");
  }
  const data: loaderData = {
    jobs: post,
  };
  experianceDeletePost(data.jobs.id);
  return redirect("/admin/experiance");
};

export default function Delete() {
  const data = useLoaderData<loaderData>();
  return <></>;
}
