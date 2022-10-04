import { Exercise } from '@prisma/client'
import { IoMdClose } from 'react-icons/io'

export type currentTrainingExerciseTab = {
    exercise: Exercise
}

const CurrentTrainingExerciseTab = ({
    exercise,
}: currentTrainingExerciseTab) => {
    return (
        <div className="w-full rounded-lg bg-secondary p-6 font-bold  text-primary">
            <div className="mb-4 flex w-full items-center justify-evenly">
                <p className="text-xl">
                    Exercise name: {exercise.exerciseName}
                </p>
                <p>Reps count: {exercise.repsCount}</p>
                <p>Weight: {exercise.weight}kg</p>
                <p>Series count: {exercise.seriesCount}</p>
                <IoMdClose className="cursor-pointer text-4xl" />
            </div>
            <p className="text-center">Total volume: {exercise.volume}kg</p>
        </div>
    )
}

export default CurrentTrainingExerciseTab
