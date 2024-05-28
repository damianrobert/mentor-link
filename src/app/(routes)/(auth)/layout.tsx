'use client';

import React from 'react';
import { BrainCircuit } from 'lucide-react';

function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='min-h-screen bg-slate-800 flex w-screen'>
      <div className='hidden md:flex justify-center items-center min-h-screen bg-zinc-100  md:w-3/5 bg-gradient-to-r from-[#3b6592] to-[#47a13d] '>
        <div className='text-5xl mr-4 font-semibold tracking-wide'>
          <div className='inline'>Mentor</div>
          <div className='inline text-white'>Link</div>
        </div>
        <div>
          <BrainCircuit size={100} />
        </div>
      </div>

      <div className='min-h-screen w-full md:w-2/5 bg-zinc-200 flex justify-center items-center'>
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
