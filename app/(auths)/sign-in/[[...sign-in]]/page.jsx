'use client'

import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
   return (
      <div className='flex items-center justify-center my-20'>
        <SignIn />;
      </div>
    )
}
