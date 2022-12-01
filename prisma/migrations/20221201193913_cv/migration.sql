-- CreateTable
CREATE TABLE "languages" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "languages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "frameworks" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "frameworks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "others" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "others_pkey" PRIMARY KEY ("id")
);
