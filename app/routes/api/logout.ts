import { ActionFunction } from "@remix-run/node";
import { authenticator } from "~/models/auth.server";

export const action: ActionFunction = async ({ request }) => {
    console.log(">>>>>>")
    await authenticator.logout(request,{redirectTo:"/"})
};
