'use client';

import React from 'react';
import Image from 'next/image';
import sideLogo from '@/../Images/logo.webp';

function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='min-h-screen bg-slate-800 flex w-screen'>
      <div className='hidden md:flex min-h-screen bg-zinc-100  md:w-3/5'>
        <div className='bg-contain bg-no-repeat bg-center'>
          <Image src={sideLogo} alt='Background Image' />
        </div>
      </div>

      <div className='min-h-screen w-full md:w-2/5 bg-zinc-200 flex justify-center items-center'>
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
