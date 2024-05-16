/*
  Warnings:

  - Added the required column `imgUrl` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "imgUrl" TEXT NOT NULL;
