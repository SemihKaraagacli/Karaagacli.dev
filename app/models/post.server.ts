import { db } from "~/utils/db.server";

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

//ADMIN FRAMEWORKS

export async function frameworksCreatePost(frameworks: any) {
  return db.frameworks.create({ data: frameworks });
}

export async function frameworksFindPost(id: number) {
  return db.frameworks.findFirst({ where: { id } });
}

export async function frameworksUpdatePost(id: number, deger:any) {
  return db.frameworks.update({ where: { id }, data: deger});
}

export async function frameworksDeletePost(id:number) {
  return await db.frameworks.delete({where:{id}})
}

//ADMIN LANGUAGES

export async function languagesCreatePost(frameworks: any) {
  return db.languages.create({ data: frameworks });
}

export async function languagesFindPost(id: number) {
  return db.languages.findFirst({ where: { id } });
}

export async function languagesUpdatePost(id: number, deger:any) {
  return db.languages.update({ where: { id }, data: deger});
}

export async function languagesDeletePost(id:number) {
  return await db.languages.delete({where:{id}})
}

//ADMIN OTHERS

export async function othersCreatePost(frameworks: any) {
  return db.others.create({ data: frameworks });
}

export async function othersFindPost(id: number) {
  return db.others.findFirst({ where: { id } });
}

export async function othersUpdatePost(id: number, deger:any) {
  return db.others.update({ where: { id }, data: deger});
}

export async function othersDeletePost(id:number) {
  return await db.others.delete({where:{id}})
}