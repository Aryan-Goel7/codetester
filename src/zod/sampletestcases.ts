import * as z from "zod"
import * as imports from "../../prisma/null"
import { CompleteProblem, RelatedProblemModel } from "./index"

export const SampleTestCasesModel = z.object({
  id: z.number().int(),
  input: z.string(),
  output: z.string(),
  explanation: z.string().nullish(),
  problemId: z.number().int().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteSampleTestCases extends z.infer<typeof SampleTestCasesModel> {
  Problem?: CompleteProblem | null
}

/**
 * RelatedSampleTestCasesModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSampleTestCasesModel: z.ZodSchema<CompleteSampleTestCases> = z.lazy(() => SampleTestCasesModel.extend({
  Problem: RelatedProblemModel.nullish(),
}))
