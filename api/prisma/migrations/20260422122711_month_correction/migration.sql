/*
  Warnings:

  - You are about to drop the `Month` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_MonthToStudents` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_MonthToStudents" DROP CONSTRAINT "_MonthToStudents_A_fkey";

-- DropForeignKey
ALTER TABLE "_MonthToStudents" DROP CONSTRAINT "_MonthToStudents_B_fkey";

-- AlterTable
ALTER TABLE "students" ADD COLUMN     "month" INTEGER NOT NULL DEFAULT 1;

-- DropTable
DROP TABLE "Month";

-- DropTable
DROP TABLE "_MonthToStudents";
