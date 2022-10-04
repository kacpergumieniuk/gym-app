import { Exercise } from '@prisma/client'

export type currentTrainingExerciseTab = {
    exercise: Exercise
}

const CurrentTrainingExerciseTab = ({
    exercise,
}: currentTrainingExerciseTab) => {
    return (
        <div className="w-full rounded-lg bg-secondary p-6 text-primary">
            {exercise.exerciseName}
        </div>
    )
}

export default CurrentTrainingExerciseTab
