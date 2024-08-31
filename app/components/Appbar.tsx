'use client';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const Appbar = () => {
    const session = useSession();

    const handleLogout = async() => {
        await signOut();
    }

    return (
        <div className='flex items-center justify-around p-2'>
            <Link href={'/'}>Logo here</Link>
            <div className='flex gap-2 items-center justify-around'>
                {
                    session?.status !== 'authenticated' && <button className='bg-white text-black py-1 px-2 rounded-sm'>
                        <Link href={'/auth/login'}>Login</Link>
                    </button>
                }
                {
                    session?.status === 'authenticated' &&
                    <>
                        <span className='text-white'>{session?.data?.user?.name}</span>
                        <button className='bg-white text-black py-1 px-2 rounded-sm' onClick={() => handleLogout()}>Logout</button>
                    </>
                }
            </div>
        </div>
    )
}

export default Appbar
