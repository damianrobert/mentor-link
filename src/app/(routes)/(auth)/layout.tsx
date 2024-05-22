import React from 'react';

function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='min-h-screen bg-slate-800 flex w-screen'>
      <div className='hidden md:block min-h-screen bg-zinc-100  md:w-3/5'>
        TODO add a logo*
      </div>

      <div className='min-h-screen w-full md:w-2/5 bg-zinc-200 flex justify-center items-center'>
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
