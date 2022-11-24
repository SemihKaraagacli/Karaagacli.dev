import { db } from "~/utils/db.server";

export async function getMains() {
  return db.main.findFirst();
}

export async function createPost(main) {
  return db.main.create({ data: main });
}
