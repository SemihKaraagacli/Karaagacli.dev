import { MetaFunction, redirect } from "@remix-run/node";
import admin from "~/styles/admin.css";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import {
  experianceDeletePost,
  experianceFindPost,
  frameworksDeletePost,
  frameworksFindPost,
} from "~/models/post.server";
import type { frameworks, resumeJob } from "@prisma/client";

export function links() {
  return [{ rel: "stylesheet", href: admin }];
}
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Home-Create",
  viewport: "width=device-width,initial-scale=1",
});

type loaderData = { framework: frameworks };

export const loader: LoaderFunction = async ({ params }) => {
  const id = params.frameworkDeleteId;
  const post = await frameworksFindPost(parseInt(id!));
  if (!post) {
    return redirect("/admin/framework");
  }
  const data: loaderData = {
    framework: post,
  };
  frameworksDeletePost(data.framework.id);
  return redirect("/admin/framework");
};

export default function Delete() {
  const data = useLoaderData<loaderData>();
  return <></>;
}
