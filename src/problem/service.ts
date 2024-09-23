// Here comes the business logic of the application
import DB from "../utils/db";
// import
const getProblem = (problemId: number) => {
  const problems = DB.getInstance().getClient().problem;
};

// TODO: can add filters here to
const getProblems = async (page: number = 1, perPage: number = 10) => {
  const data = await DB.getInstance()
    .getClient()
    .problem.findMany({
      skip: page * perPage,
      take: perPage,
    });
  return data;
};

// TODO: Add problem data validation
const addProblem = async (problemData: any) => {
  const problemAdded = await DB.getInstance().getClient().problem.create({
    data: problemData,
  });
  return problemAdded;
};
// const editProblem = () =>{

// }

export { getProblem, getProblems, addProblem };
