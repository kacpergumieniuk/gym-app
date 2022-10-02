import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { trpc } from '../../utils/trpc'
import { IoMdClose } from 'react-icons/io'
import { Dialog, Transition } from '@headlessui/react'
import { useState, Fragment } from 'react'
import AddExerciseModal from '../../components/AddExerciseModal'

const CurrentTraining: NextPage = () => {
    const router = useRouter()
    const { trainingId } = router.query
    const currentTraining = trpc.useQuery([
        'training.getCurrentTraining',
        { trainingId },
    ])

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
        </main>
    )
}

export default CurrentTraining
