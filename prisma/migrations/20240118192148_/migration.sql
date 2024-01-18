/*
  Warnings:

  - You are about to drop the column `evoId` on the `Pet` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Pet" DROP COLUMN "evoId",
ALTER COLUMN "isRare" DROP NOT NULL,
ALTER COLUMN "spriteUrl" DROP NOT NULL;
