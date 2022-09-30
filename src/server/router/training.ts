import { createRouter } from './context'
import { z } from 'zod'
import { Dialog } from '@headlessui/react'

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
            trainingId: z.any(),
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
            trainingId: z.any(),
        }),
        async resolve({ input, ctx }) {
            await ctx.prisma.training.delete({
                where: { id: input.trainingId },
            })
        },
    })
