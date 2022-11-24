import { db } from "~/utils/db.server";

export async function getMains() {
  return db.main.findFirst();
}
