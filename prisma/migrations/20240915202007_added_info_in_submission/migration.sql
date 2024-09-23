/*
  Warnings:

  - Added the required column `updatedAt` to the `Problem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `SampleTestCases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `Submission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lang` to the `Submission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `memory_take` to the `Submission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time_taken` to the `Submission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `TestCases` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Problem" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "SampleTestCases" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Submission" ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "lang" "Language" NOT NULL,
ADD COLUMN     "memory_take" INTEGER NOT NULL,
ADD COLUMN     "time_taken" INTEGER NOT NULL,
ADD COLUMN     "verdict" "Verdict" NOT NULL DEFAULT 'RUNNING';

-- AlterTable
ALTER TABLE "TestCases" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
