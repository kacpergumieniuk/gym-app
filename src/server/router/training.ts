import { createRouter } from "./context";
import { z } from "zod";

export const trainingRouter = createRouter()
  .mutation("createTraining", {
    input: z
      .object({
        trainingName: z.string(),
      }),
    async resolve({ input, ctx }) {
      const newlyCreatedTraining = await ctx.prisma.training.create({data: input})
      return  newlyCreatedTraining.id
    },
  })
