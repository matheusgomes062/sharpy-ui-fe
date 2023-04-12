/*
  Warnings:

  - You are about to drop the column `isRemote` on the `Role` table. All the data in the column will be lost.
  - Added the required column `modality` to the `Role` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Role" DROP COLUMN "isRemote",
ADD COLUMN     "modality" TEXT NOT NULL;
