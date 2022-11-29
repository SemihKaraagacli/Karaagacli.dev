import { db } from "~/utils/db.server";

// export async function getMains() {
//   return db.main.findFirst();
// }

// ADMİN MAİN

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


// ADMİN ABOUT

export async function aboutCreatePost(about: any) {
  return db.about.create({ data: about });
}

export async function aboutFindPost(id: number) {
  return db.about.findFirst({ where: { id } });
}

// export async function aboutUpdatePost(id: number, aboutWrite: string, profilImageName:string, instagram:string, twitter:string, github:string, linkedin:string, google:string) {
//   return db.about.update({ where: { id }, data: {aboutWrite, profilImageName, instagram, twitter, github, linkedin, google } });
// }

export async function aboutUpdatePost(id: number, data:any) {
  return db.about.update({ where: { id }, data: data});
}

export async function aboutDeletePost(id:number) {
  return await db.about.delete({where:{id}})
}
