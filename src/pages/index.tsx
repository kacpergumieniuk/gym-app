import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
    /*   const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]); */
    const router = useRouter()
    const onTrainingStart = () => {
        router.push('/start')
    }
    return (
        <>
            <Head>
                <title>Gym App</title>
                <meta name="description" content="Gym app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex h-screen  w-screen flex-col items-center justify-center bg-background">
                <p className="absolute top-4 left-4 text-2xl font-extrabold text-primary">
                    GymApp
                </p>
                <h1 className="mb-20 text-6xl font-extrabold text-primary">
                    Hello Kacper!
                </h1>
                <button
                    onClick={() => onTrainingStart()}
                    className="delay-50 mb-6 w-48 rounded-lg bg-secondary p-4 font-bold transition ease-in-out hover:bg-hover"
                >
                    Start new training
                </button>
                <button className="delay-50 w-48 rounded-lg bg-secondary p-4 font-bold transition ease-in-out hover:bg-hover">
                    Statistics
                </button>
            </main>
        </>
    )
}

export default Home
