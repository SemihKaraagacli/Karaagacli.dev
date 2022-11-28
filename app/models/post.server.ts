import { main } from "@prisma/client";
import { db } from "~/utils/db.server";

export async function getMains() {
  return db.main.findFirst();
}

export async function createPost(main: any) {
  return db.main.create({ data: main });
}

export async function findPost(id: number) {
  return db.main.findFirst({ where: { id } });
}

export async function updatePost(id: number, welcomeWrite: string) {
  return db.main.update({ where: { id }, data: { welcomeWrite} });
}

export async function deletePost(id:number) {
  return await db.main.delete({where:{id}})
}
