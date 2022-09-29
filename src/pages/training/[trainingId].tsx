import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const CurrentTraining: NextPage = () => {
    const router = useRouter()
    const { trainingId } = router.query

    return (
        <main className="flex h-screen w-screen flex-col bg-background">
            {trainingId}
        </main>
    )
}

export default CurrentTraining
