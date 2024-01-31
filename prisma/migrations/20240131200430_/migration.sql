/*
  Warnings:

  - You are about to drop the column `ranAway` on the `Pet` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Pet" DROP COLUMN "ranAway",
ADD COLUMN     "isPaused" BOOLEAN NOT NULL DEFAULT false;
