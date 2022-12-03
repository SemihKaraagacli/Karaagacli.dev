import { MetaFunction, redirect } from "@remix-run/node";
import admin from "~/styles/admin.css";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { contactDeletePost, contactFindPost } from "~/models/post.server";
import type { contact } from "@prisma/client";
import { authenticator } from "~/models/auth.server";

export function links() {
  return [{ rel: "stylesheet", href: admin }];
}
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Home-Create",
  viewport: "width=device-width,initial-scale=1",
});

type loaderData = { contact: contact };

export const loader: LoaderFunction = async ({ params, request }) => {
  await authenticator.isAuthenticated(request, { failureRedirect: "/admin/" });
  const id = params.contactDeleteId;
  const post = await contactFindPost(parseInt(id!));
  if (!post) {
    return redirect("/admin/contact");
  }
  const data: loaderData = {
    contact: post,
  };
  contactDeletePost(data.contact.id);
  return redirect("/admin/contact");
};

export default function Delete() {
  const data = useLoaderData<loaderData>();
  return <></>;
}
