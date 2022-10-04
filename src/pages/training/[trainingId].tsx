import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { trpc } from '../../utils/trpc'
import { IoMdClose } from 'react-icons/io'
import { useState } from 'react'
import AddExerciseModal from '../../components/AddExerciseModal'
import { Exercise } from '@prisma/client'
import CurrentTrainingExerciseTab from '../../components/currentTrainingExerciseTab'

const CurrentTraining: NextPage = () => {
    const router = useRouter()
    const trainingId = router.query.trainingId as string

    const currentTraining = trpc.useQuery([
        'training.getCurrentTraining',
        { trainingId },
    ])

    const addExercise = trpc.useMutation('training.addTrainingExercise')
    const exercises = trpc.useQuery([
        'training.getAllTrainings',
        { trainingId },
    ])
    const handleAddExercise = async (data: Exercise, volume: number) => {
        await addExercise.mutateAsync({
            ...data,
            trainingId: trainingId,
            volume: volume,
        })
        exercises.refetch()
    }

    const [isAddExerciseModalOpen, setIsAddExerciseModalOpen] = useState(false)

    const stopTraining = trpc.useMutation('training.removeCurrentTraining')
    const handleStopTraining = async () => {
        stopTraining.mutateAsync({ trainingId })
        router.push('/')
    }

    const handleOpenAddExerciseModal = () => {
        setIsAddExerciseModalOpen(true)
    }

    const handleCloseAddExerciseModal = () => {
        setIsAddExerciseModalOpen(false)
    }

    return (
        <main className="flex h-screen w-screen flex-col bg-background">
            <AddExerciseModal
                setClose={handleCloseAddExerciseModal}
                isOpen={isAddExerciseModalOpen}
                handleAddExercise={handleAddExercise}
            />
            <p className="absolute top-3 left-3 text-2xl font-bold text-primary">
                Start time : {currentTraining.data?.startDate.getHours()}:
                {currentTraining.data?.startDate.getMinutes()}:
                {currentTraining.data?.startDate.getSeconds()}
            </p>
            <IoMdClose
                className="absolute top-3 right-3 cursor-pointer rounded-full bg-red-400 p-1 text-6xl text-red-800 transition delay-100 ease-in-out hover:bg-red-500"
                onClick={() => handleStopTraining()}
            />
            <button onClick={handleOpenAddExerciseModal}>
                Add new exercise
            </button>
            <div className="mx-16 mt-20 flex flex-col gap-5">
                {exercises &&
                    exercises.data?.map((exercise) => (
                        <CurrentTrainingExerciseTab exercise={exercise} />
                    ))}
            </div>
        </main>
    )
}

export default CurrentTraining
