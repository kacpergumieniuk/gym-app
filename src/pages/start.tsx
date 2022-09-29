import { useState } from 'react'
import type { NextPage } from 'next'

const StartPage: NextPage = () => {
    const [trainingName, setTrainingName] = useState('')
    return (
        <main className="flex h-screen w-screen flex-col items-center justify-center bg-background">
            <h1 className="mb-16 text-5xl font-extrabold text-primary">
                Choose training name:
            </h1>
            <input
                onChange={(e) => setTrainingName(e.target.value)}
                type="text"
                className="mb-12 w-1/2 rounded-lg p-3 font-bold text-primary outline-0"
            />
            <button
                disabled={!trainingName.trim().length}
                className="delay-50 w-48 rounded-lg bg-secondary p-4 font-bold transition ease-in-out hover:bg-hover  disabled:bg-gray-400"
            >
                Let's start!
            </button>
        </main>
    )
}

export default StartPage
