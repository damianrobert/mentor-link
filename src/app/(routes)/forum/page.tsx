'use client';

import React from 'react';
import NavBar from '@/components/client/NavBar';

function ForumPage() {
  return (
    <div className='min-h-screen flex flex-col'>
      <NavBar />

      <div className='flex flex-grow p-1'>
        <div className='bg-zinc-200 rounded-md mr-1'>
          <h3 className='w-fit mx-auto text-2xl font-bold'>Categories</h3>
          <div className='text-[14px]'>
            <p className='my-1'>Discuții Generale</p>
            <p className='my-1'>Oportunități de Mentorat</p>
            <p className='my-1'>Dezvoltare Profesională</p>
            <p className='my-1'>Discuții Specifice Industriilor</p>
            <p className='my-1'>Dezvoltarea Abilităților </p>
            <p className='my-1'>Dezvoltare Personală</p>
            <p className='my-1'>Networking și Evenimente</p>
            <p className='my-1'>Provocări în Mentorat</p>
            <p className='my-1'>Feedback și Sugestii</p>
            <p className='my-1'>Resurse și Instrumente</p>
          </div>
        </div>

        <div className='bg-zinc-200 rounded-md px-1 mr-1'>
          <div className='border-2 border-white rounded-md w-48 my-1'>
            <p className='text-[14px] font-bold'>Titlu</p>
            <p className='text-[12px]'>Autor</p>
            <p className='text-[12px]'>Dată</p>
          </div>

          <div className='border-2 border-white rounded-md w-48 my-1'>
            <p className='text-[14px] font-bold'>Titlu</p>
            <p className='text-[12px]'>Autor</p>
            <p className='text-[12px]'>Dată</p>
          </div>

          <div className='border-2 border-white rounded-md w-48 my-1'>
            <p className='text-[14px] font-bold'>Titlu</p>
            <p className='text-[12px]'>Autor</p>
            <p className='text-[12px]'>Dată</p>
          </div>
        </div>

        <div className='flex flex-col flex-grow bg-zinc-200 rounded-md p-1'>
          <h1 className='text-5xl bg-zinc-100 rounded-md text-center mb-2'>
            Postare
          </h1>
          <div className='bg-zinc-100 rounded-md flex-grow'>
            <h1 className='text-3xl text-center'>Conținut postare</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForumPage;
