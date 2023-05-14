/*
  Warnings:

  - Added the required column `journey` to the `Role` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Role" ADD COLUMN     "journey" TEXT NOT NULL;
