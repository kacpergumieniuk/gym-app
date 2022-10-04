import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

export type AddExerciseModal = {
    setClose: () => void
    isOpen: boolean
    handleAddExercise: Function
}

const AddExerciseModal = ({
    handleAddExercise,
    isOpen,
    setClose,
}: AddExerciseModal) => {
    const { register, handleSubmit } = useForm()
    const [repsCount, setRepsCount] = useState(0)
    const [weightCount, setWeightCount] = useState(0)
    const [seriesCount, setSeriesCount] = useState(0)
    const [volume, setVolume] = useState(0)
    const [exerciseName, setExerciseName] = useState('')

    const handleCloseModal = () => {
        setClose()
    }

    useEffect(() => {
        setVolume(weightCount * seriesCount * repsCount)
    }, [weightCount, seriesCount, repsCount])

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                onClose={handleCloseModal}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="mb-6 text-center text-lg font-medium leading-6 text-gray-900"
                                >
                                    Add Exercise
                                </Dialog.Title>
                                <form
                                    onSubmit={handleSubmit((data) =>
                                        handleAddExercise(data, volume)
                                    )}
                                >
                                    <label
                                        className="text-left text-sm"
                                        htmlFor="exerciseName"
                                    >
                                        Exercise name
                                    </label>
                                    <input
                                        {...register('exerciseName', {
                                            required: true,
                                        })}
                                        placeholder="Exercise name"
                                        className="mb-3 w-full rounded-md border p-2 outline-none"
                                        id="exerciseName"
                                        onChange={(e) =>
                                            setExerciseName(e.target.value)
                                        }
                                    />
                                    <label
                                        className="text-left text-sm"
                                        htmlFor="weightInput"
                                    >
                                        Weight
                                    </label>
                                    <input
                                        {...register('weight', {
                                            required: true,
                                            valueAsNumber: true,
                                        })}
                                        placeholder="0"
                                        id="weightInput"
                                        type="number"
                                        className="mb-3 w-full rounded-md border p-2 outline-none"
                                        onChange={(e) =>
                                            setWeightCount(
                                                Number(e.target.value)
                                            )
                                        }
                                    />
                                    <label
                                        className="text-left text-sm"
                                        htmlFor="seriesInput"
                                    >
                                        Series count
                                    </label>
                                    <input
                                        {...register('seriesCount', {
                                            required: true,
                                            valueAsNumber: true,
                                        })}
                                        placeholder="0"
                                        type="number"
                                        id="seriesInput"
                                        className="mb-3 w-full rounded-md border p-2 outline-none"
                                        onChange={(e) =>
                                            setSeriesCount(
                                                Number(e.target.value)
                                            )
                                        }
                                    />
                                    <label
                                        className="text-left text-sm"
                                        htmlFor="repsInput"
                                    >
                                        Reps count
                                    </label>
                                    <input
                                        {...register('repsCount', {
                                            required: true,
                                            valueAsNumber: true,
                                        })}
                                        placeholder="0"
                                        id="repsInput"
                                        type="number"
                                        className="mb-4 w-full rounded-md border p-2 outline-none"
                                        onChange={(e) =>
                                            setRepsCount(Number(e.target.value))
                                        }
                                    />
                                    <p className="mb-6 text-left text-sm">
                                        Total volume: {volume} kg
                                    </p>
                                    <button
                                        type="submit"
                                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                                        onClick={setClose}
                                    >
                                        Add exercise
                                    </button>
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default AddExerciseModal
