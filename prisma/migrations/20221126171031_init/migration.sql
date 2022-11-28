-- CreateTable
CREATE TABLE "admin" (
    "id" SERIAL NOT NULL,
    "firsName" TEXT,
    "lastName" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "main" (
    "id" SERIAL NOT NULL,
    "welcomeWrite" TEXT,

    CONSTRAINT "main_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "about" (
    "id" SERIAL NOT NULL,
    "aboutWrite" TEXT,
    "profilImageName" TEXT,
    "instagram" TEXT,
    "twitter" TEXT,
    "github" TEXT,
    "linkedin" TEXT,
    "google" TEXT,

    CONSTRAINT "about_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resumeSchool" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "date" TEXT,
    "department" TEXT,
    "explanation" TEXT,

    CONSTRAINT "resumeSchool_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resumeJob" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "date" TEXT,
    "department" TEXT,
    "explanation" TEXT,

    CONSTRAINT "resumeJob_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "adress" TEXT,
    "comment" TEXT,
    "projectImageName" TEXT,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "adressName" TEXT,
    "adressWebAdress" TEXT,
    "google" TEXT,

    CONSTRAINT "contact_pkey" PRIMARY KEY ("id")
);
