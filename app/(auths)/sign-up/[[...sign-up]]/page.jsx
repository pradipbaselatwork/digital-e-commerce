'use client'

import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className='flex items-center justify-center my-20'>
      <SignUp />;
    </div>
    
  )
}
