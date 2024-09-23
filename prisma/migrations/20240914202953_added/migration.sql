/*
  Warnings:

  - You are about to drop the column `explanation` on the `Problem` table. All the data in the column will be lost.
  - You are about to drop the column `code` on the `Submission` table. All the data in the column will be lost.
  - You are about to drop the column `language` on the `Submission` table. All the data in the column will be lost.
  - You are about to drop the column `memory` on the `Submission` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `Submission` table. All the data in the column will be lost.
  - You are about to drop the column `verdict` on the `Submission` table. All the data in the column will be lost.
  - Added the required column `name` to the `Problem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `input` to the `SampleTestCases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `output` to the `SampleTestCases` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Submission" DROP CONSTRAINT "Submission_problemId_fkey";

-- AlterTable
ALTER TABLE "Problem" DROP COLUMN "explanation",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SampleTestCases" ADD COLUMN     "explanation" TEXT,
ADD COLUMN     "input" TEXT NOT NULL,
ADD COLUMN     "output" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Submission" DROP COLUMN "code",
DROP COLUMN "language",
DROP COLUMN "memory",
DROP COLUMN "time",
DROP COLUMN "verdict",
ALTER COLUMN "problemId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
