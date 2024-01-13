/*
  Warnings:

  - You are about to drop the column `species` on the `Pet` table. All the data in the column will be lost.
  - Added the required column `nickname` to the `Pet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pet" DROP COLUMN "species",
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "nickname" TEXT NOT NULL;
