/*
  Warnings:

  - Added the required column `description` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `heading` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "heading" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "WhatYouWillLearn" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "WhatYouWillLearn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WhoIsThisCourseFor" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "WhoIsThisCourseFor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WhatYouNeed" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "WhatYouNeed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CourseToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CourseToWhatYouWillLearn" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CourseToWhoIsThisCourseFor" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CourseToWhatYouNeed" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "WhatYouWillLearn_id_key" ON "WhatYouWillLearn"("id");

-- CreateIndex
CREATE UNIQUE INDEX "WhoIsThisCourseFor_id_key" ON "WhoIsThisCourseFor"("id");

-- CreateIndex
CREATE UNIQUE INDEX "WhatYouNeed_id_key" ON "WhatYouNeed"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_CourseToUser_AB_unique" ON "_CourseToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_CourseToUser_B_index" ON "_CourseToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CourseToWhatYouWillLearn_AB_unique" ON "_CourseToWhatYouWillLearn"("A", "B");

-- CreateIndex
CREATE INDEX "_CourseToWhatYouWillLearn_B_index" ON "_CourseToWhatYouWillLearn"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CourseToWhoIsThisCourseFor_AB_unique" ON "_CourseToWhoIsThisCourseFor"("A", "B");

-- CreateIndex
CREATE INDEX "_CourseToWhoIsThisCourseFor_B_index" ON "_CourseToWhoIsThisCourseFor"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CourseToWhatYouNeed_AB_unique" ON "_CourseToWhatYouNeed"("A", "B");

-- CreateIndex
CREATE INDEX "_CourseToWhatYouNeed_B_index" ON "_CourseToWhatYouNeed"("B");

-- AddForeignKey
ALTER TABLE "_CourseToUser" ADD CONSTRAINT "_CourseToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseToUser" ADD CONSTRAINT "_CourseToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseToWhatYouWillLearn" ADD CONSTRAINT "_CourseToWhatYouWillLearn_A_fkey" FOREIGN KEY ("A") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseToWhatYouWillLearn" ADD CONSTRAINT "_CourseToWhatYouWillLearn_B_fkey" FOREIGN KEY ("B") REFERENCES "WhatYouWillLearn"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseToWhoIsThisCourseFor" ADD CONSTRAINT "_CourseToWhoIsThisCourseFor_A_fkey" FOREIGN KEY ("A") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseToWhoIsThisCourseFor" ADD CONSTRAINT "_CourseToWhoIsThisCourseFor_B_fkey" FOREIGN KEY ("B") REFERENCES "WhoIsThisCourseFor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseToWhatYouNeed" ADD CONSTRAINT "_CourseToWhatYouNeed_A_fkey" FOREIGN KEY ("A") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseToWhatYouNeed" ADD CONSTRAINT "_CourseToWhatYouNeed_B_fkey" FOREIGN KEY ("B") REFERENCES "WhatYouNeed"("id") ON DELETE CASCADE ON UPDATE CASCADE;
