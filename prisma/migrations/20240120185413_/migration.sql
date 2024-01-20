/*
  Warnings:

  - Made the column `isRare` on table `Pet` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Pet" ADD COLUMN     "isShiny" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "isRare" SET NOT NULL,
ALTER COLUMN "isRare" SET DEFAULT false;
