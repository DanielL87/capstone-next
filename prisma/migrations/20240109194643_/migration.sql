/*
  Warnings:

  - You are about to drop the column `rarity` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Pet` table. All the data in the column will be lost.
  - Added the required column `evoId` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isRare` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pokedexId` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `spriteUrl` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Pet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pet" DROP COLUMN "rarity",
DROP COLUMN "url",
ADD COLUMN     "evoId" INTEGER NOT NULL,
ADD COLUMN     "isRare" BOOLEAN NOT NULL,
ADD COLUMN     "pokedexId" INTEGER NOT NULL,
ADD COLUMN     "ranAway" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "spriteUrl" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
