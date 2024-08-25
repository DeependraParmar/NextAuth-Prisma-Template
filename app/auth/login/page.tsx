'use client';
import { signIn, useSession } from "next-auth/react";

const page = () => {
    const session = useSession();
    const handleLogin = async (provider: string) => {
        await signIn(provider);
    }

    return (
        <div className='bg-slate-500 w-1/5 m-auto translate-y-48 p-4 rounded-md text-center'>
            {
                session?.status === 'authenticated' ?
                    <>
                        <span>Welcome {session?.data?.user?.name}</span>
                        <span>{JSON.stringify(session?.data)}</span>
                    </> :
                    <div className="flex flex-col gap-4">
                        <button onClick={() => handleLogin('google')} className='bg-white text-black p-2 rounded-md'>Sign in with Google</button>
                        <button onClick={() => handleLogin('github')} className='bg-white text-black p-2 rounded-md'>Sign in with Github</button>
                    </div>
            }
        </div>
    )
}

export default page
