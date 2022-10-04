import { createRouter } from './context'
import { z } from 'zod'

export const trainingRouter = createRouter()
    .mutation('createTraining', {
        input: z.object({
            trainingName: z.string(),
        }),
        async resolve({ input, ctx }) {
            const newlyCreatedTraining = await ctx.prisma.training.create({
                data: input,
            })
            return newlyCreatedTraining.id
        },
    })
    .query('getCurrentTraining', {
        input: z.object({
            trainingId: z.string(),
        }),
        async resolve({ input, ctx }) {
            return await ctx.prisma.training.findUnique({
                where: {
                    id: input.trainingId,
                },
            })
        },
    })
    .mutation('removeCurrentTraining', {
        input: z.object({
            trainingId: z.string(),
        }),
        async resolve({ input, ctx }) {
            await ctx.prisma.training.delete({
                where: { id: input.trainingId },
            })
        },
    })
    .mutation('addTrainingExercise', {
        input: z.object({
            trainingId: z.string(),
            exerciseName: z.string(),
            weight: z.number(),
            seriesCount: z.number(),
            repsCount: z.number(),
            volume: z.number(),
        }),
        async resolve({ input, ctx }) {
           await ctx.prisma.exercise.create({
                data: input
            })
        },
    })
    .query('getAllTrainings', {
        input: z.object({
            trainingId: z.string(),
        }),
        async resolve({ input, ctx }) {
            return await ctx.prisma.exercise.findMany({
                where: {
                    trainingId: input.trainingId,
                },
            })
        },
    })
