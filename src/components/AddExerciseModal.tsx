import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useForm } from 'react-hook-form'

export type AddExerciseModal = {
    setClose: () => void
    isOpen: boolean
}

const AddExerciseModal = ({ isOpen, setClose }: AddExerciseModal) => {
    const { register, handleSubmit } = useForm()

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setClose}>
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
                                        console.log(data)
                                    )}
                                    className="text-center"
                                >
                                    <input
                                        {...register('exerciseName', {
                                            required: true,
                                        })}
                                        placeholder="Exercise name"
                                        className="mb-3 w-full rounded-md border p-2 outline-none"
                                    />
                                    <input
                                        {...register('weight', {
                                            required: true,
                                        })}
                                        placeholder="Weight"
                                        className="mb-3 w-full rounded-md border p-2 outline-none"
                                    />
                                    <input
                                        {...register('seriesCount', {
                                            required: true,
                                        })}
                                        placeholder="Series count"
                                        className="mb-3 w-full rounded-md border p-2 outline-none"
                                    />
                                    <input
                                        {...register('repsCount', {
                                            required: true,
                                        })}
                                        placeholder="Reps counter"
                                        className="mb-6 w-full rounded-md border p-2 outline-none"
                                    />
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
