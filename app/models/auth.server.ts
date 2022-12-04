
import { admin } from "@prisma/client";
import { Authenticator } from "remix-auth";
import { sessionStorage } from "~/models/session.server";
import { FormStrategy } from "remix-auth-form";
import invariant from "tiny-invariant";
import bcrypt from 'bcryptjs'
import { db } from "~/utils/db.server";

type adminWithoutPassword = Omit<admin, "password">;
export let authenticator = new Authenticator<adminWithoutPassword | null>(sessionStorage);


authenticator.use(
  new FormStrategy(async ({ form, context }) => {
   
    let username = form.get("username"); 
    let password = form.get("password");

    
    invariant(typeof username === "string", "username must be a string");
    invariant(username.length > 0, "username must not be empty");

    invariant(typeof password === "string", "password must be a string");
    invariant(password.length > 0, "password must not be empty");

    

    let user = await verifyLogin(username, password);
    
    return user;
  }),
  "AdminPanel"
);


export async function verifyLogin(
    username: admin["firsName"],
    password: string
  ) {
    const userWithPassword = await db.admin.findFirst({
      where: { firsName:username },
    });
  
    if (!userWithPassword || !userWithPassword.password) {
      return null;
    }

    const isValid = await verifyPassword(userWithPassword.password, password);
  
    if (!isValid) {
      return null;
    }

    
    const { password: _password, ...userWithoutPassword } = userWithPassword;
  
    return userWithoutPassword;
  }

  const verifyPassword = async (password: string, passwordToVerify: string) => {
    return await bcrypt.compare(passwordToVerify, password);
  };
