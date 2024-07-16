import { Button } from '@/components/ui/button';
import React from 'react'
import { FcGoogle } from 'react-icons/fc';

const page = () => {

  return (
    <>
          <div className="flex flex-col items-center justify-center space-y-4">
              <div className="text-2xl font-semibold text-center pt-80">Login Page</div>
              <p>Super fast In-House Authentication using NextAuth.</p>
              <Button className='gap-2' variant={'outline'}><FcGoogle size={'18'} /> Continue with Google</Button>
          </div>
    </>
  )
}

export default page;