'use client';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Appbar = () => {
    const session = useSession();
    const router = useRouter();

    const handleLogout = async(event : any) => {
        event.preventDefault();
        await signOut();
    }

    return (
        <div className='flex items-center justify-around p-2'>
            <div>Logo here</div>
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
                        <button className='bg-white text-black py-1 px-2 rounded-sm' onClick={(e) => handleLogout(e)}>Logout</button>
                    </>
                }
            </div>
        </div>
    )
}

export default Appbar
