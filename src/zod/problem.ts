import * as z from "zod"
import * as imports from "../../prisma/null"
import { CompleteSampleTestCases, RelatedSampleTestCasesModel, CompleteTestCases, RelatedTestCasesModel, CompleteSubmission, RelatedSubmissionModel } from "./index"

export const ProblemModel = z.object({
  id: z.number().int(),
  time_limit: z.number().int(),
  memory_limit: z.number().int(),
  description: z.string(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteProblem extends z.infer<typeof ProblemModel> {
  sampleTestCases: CompleteSampleTestCases[]
  testCases: CompleteTestCases[]
  submissions: CompleteSubmission[]
}

/**
 * RelatedProblemModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedProblemModel: z.ZodSchema<CompleteProblem> = z.lazy(() => ProblemModel.extend({
  sampleTestCases: RelatedSampleTestCasesModel.array(),
  testCases: RelatedTestCasesModel.array(),
  submissions: RelatedSubmissionModel.array(),
}))
