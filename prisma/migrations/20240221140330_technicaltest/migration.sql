-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "maxValue" INTEGER NOT NULL,
    "sortValue" INTEGER[],

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
