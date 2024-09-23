-- CreateEnum
CREATE TYPE "Language" AS ENUM ('CPP', 'JAVA', 'PYTHON');

-- CreateEnum
CREATE TYPE "Verdict" AS ENUM ('RUNNING', 'ACCEPTED', 'TIME_LIMIT_EXCEEDED', 'MEMORY_LIMIT_EXCEEDED', 'WRONG_ANSWER', 'RUN_TIME_ERROR', 'COMPILE_TIME_ERROR');

-- CreateTable
CREATE TABLE "Problem" (
    "id" SERIAL NOT NULL,
    "time_limit" INTEGER NOT NULL DEFAULT 2,
    "memory_limit" INTEGER NOT NULL DEFAULT 268435456,
    "description" TEXT NOT NULL,
    "explanation" TEXT,

    CONSTRAINT "Problem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SampleTestCases" (
    "id" SERIAL NOT NULL,
    "problemId" INTEGER,

    CONSTRAINT "SampleTestCases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestCases" (
    "id" SERIAL NOT NULL,
    "problemId" INTEGER,

    CONSTRAINT "TestCases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Submission" (
    "id" SERIAL NOT NULL,
    "problemId" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "language" "Language" NOT NULL,
    "verdict" "Verdict" NOT NULL,
    "time" INTEGER NOT NULL,
    "memory" INTEGER NOT NULL,

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SampleTestCases" ADD CONSTRAINT "SampleTestCases_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestCases" ADD CONSTRAINT "TestCases_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
