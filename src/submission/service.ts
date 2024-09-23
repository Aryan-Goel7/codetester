import DB from "../utils/db";

// TODO: fix unknown and add this to the worker to process the data and update the verdict
const addSubmission = async (submissionData: any) => {
  const submissionAdded = await DB.getInstance().getClient().submission.create({
    data: submissionData,
  });
  return submissionAdded;
};

// UserID
const getSubmissions = async (
  problemId: number,
  page: number,
  perPage: number
) => {
  const allSubmissions = await DB.getInstance()
    .getClient()
    .problem.findMany({
      skip: perPage * page,
      take: perPage,
      where: {
        id: problemId,
      },
    });
  return allSubmissions;
};

// This will give all the Submission for particular Problem and UserId
const getUserProblemSubmission = async (problemId: number, userId: number) => {
  const submissions = DB.getInstance()
    .getClient()
    .submission.findMany({
      where: {
        userId: userId,
        problemId: problemId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
};

export { getSubmissions, getUserProblemSubmission, addSubmission };
