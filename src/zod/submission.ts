import * as z from "zod"
import * as imports from "../../prisma/null"
import { Language, Verdict } from "@prisma/client"
import { CompleteProblem, RelatedProblemModel } from "./index"

export const SubmissionModel = z.object({
  id: z.number().int(),
  lang: z.nativeEnum(Language),
  verdict: z.nativeEnum(Verdict),
  time_taken: z.number().int(),
  memory_take: z.number().int(),
  code: z.string(),
  problemId: z.number().int().nullish(),
  createdAt: z.date(),
})

export interface CompleteSubmission extends z.infer<typeof SubmissionModel> {
  Problem?: CompleteProblem | null
}

/**
 * RelatedSubmissionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSubmissionModel: z.ZodSchema<CompleteSubmission> = z.lazy(() => SubmissionModel.extend({
  Problem: RelatedProblemModel.nullish(),
}))
