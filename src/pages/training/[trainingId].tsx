import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { trpc } from '../../utils/trpc'
import { IoMdClose } from 'react-icons/io'
import { Dialog } from '@headlessui/react'

const CurrentTraining: NextPage = () => {
    let [isOpen, setIsOpen] = useState(true)
    const router = useRouter()
    const { trainingId } = router.query
    const currentTraining = trpc.useQuery([
        'training.getCurrentTraining',
        { trainingId },
    ])
    const stopTraining = trpc.useMutation('training.removeCurrentTraining')
    const handleStopTraining = async () => {
        stopTraining.mutateAsync({ trainingId })
        router.push('/')
    }

    return (
        <main className="flex h-screen w-screen flex-col bg-background">
            <p className="absolute top-3 left-3 text-2xl font-bold text-primary">
                Start time : {currentTraining.data?.startDate.getHours()}:
                {currentTraining.data?.startDate.getMinutes()}:
                {currentTraining.data?.startDate.getSeconds()}
            </p>
            <IoMdClose
                className="absolute top-3 right-3 cursor-pointer rounded-full bg-red-400 p-1 text-6xl text-red-800"
                onClick={() => handleStopTraining()}
            />
        </main>
    )
}

export default CurrentTraining
