import * as z from "zod"
import * as imports from "../../prisma/null"
import { CompleteProblem, RelatedProblemModel } from "./index"

export const TestCasesModel = z.object({
  id: z.number().int(),
  problemId: z.number().int().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteTestCases extends z.infer<typeof TestCasesModel> {
  Problem?: CompleteProblem | null
}

/**
 * RelatedTestCasesModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedTestCasesModel: z.ZodSchema<CompleteTestCases> = z.lazy(() => TestCasesModel.extend({
  Problem: RelatedProblemModel.nullish(),
}))
