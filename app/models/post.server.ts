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

export async function aboutUpdatePost(id: number, data:any) {
  return db.about.update({ where: { id }, data: data});
}

export async function aboutDeletePost(id:number) {
  return await db.about.delete({where:{id}})
}

//ADMIN EDUCATION

export async function educationCreatePost(education: any) {
  return db.resumeSchool.create({ data: education });
}

export async function educationFindPost(id: number) {
  return db.resumeSchool.findFirst({ where: { id } });
}

export async function educationUpdatePost(id: number, deger:any) {
  return db.resumeSchool.update({ where: { id }, data: deger});
}

export async function educationDeletePost(id:number) {
  return await db.resumeSchool.delete({where:{id}})
}

//ADMIN EXPERIANCE

export async function experianceCreatePost(job: any) {
  return db.resumeJob.create({ data: job });
}

export async function experianceFindPost(id: number) {
  return db.resumeJob.findFirst({ where: { id } });
}

export async function experianceUpdatePost(id: number, deger:any) {
  return db.resumeJob.update({ where: { id }, data: deger});
}

export async function experianceDeletePost(id:number) {
  return await db.resumeJob.delete({where:{id}})
}

//ADMIN PROJECT

export async function projectCreatePost(project: any) {
  return db.projects.create({ data: project });
}

export async function projectFindPost(id: number) {
  return db.projects.findFirst({ where: { id } });
}

export async function projectUpdatePost(id: number, deger:any) {
  return db.projects.update({ where: { id }, data: deger});
}

export async function projectDeletePost(id:number) {
  return await db.projects.delete({where:{id}})
}

//ADMIN CONTACT

export async function contactCreatePost(contact: any) {
  return db.contact.create({ data: contact });
}

export async function contactFindPost(id: number) {
  return db.contact.findFirst({ where: { id } });
}

export async function contactUpdatePost(id: number, deger:any) {
  return db.contact.update({ where: { id }, data: deger});
}

export async function contactDeletePost(id:number) {
  return await db.contact.delete({where:{id}})
}