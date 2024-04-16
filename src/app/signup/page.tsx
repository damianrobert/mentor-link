'use client';

import Link from 'next/link';
import Button from '@/components/button';
import { useState } from 'react';
import { Input } from '@/components/ui/input';

export default function Signup() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    username: '',
  });

  return (
    <div className='min-h-screen bg-slate-800 text-zinc-300 flex flex-col justify-center items-center'>
      <div className='rounded-md p-8 min-w-64 flex flex-col justify-center items-center bg-slate-700 border-2 border-black'>
        <p className='mb-10 text-3xl tracking-widest font-bold'>SIGN UP</p>
        <div className='my-4'>
          <p>First Name</p>
          <Input className='my-2' type='text' />
          <p>Last Name</p>
          <Input className='my-2' type='text' />
          <p>Email</p>
          <Input className='my-2' type='email' />
          <p>Password</p>
          <Input className='my-2' type='password' />
          <p>Username</p>
          <Input className='my-2' type='text' />
        </div>
        <Button name='SUBMIT'></Button>

        <Link href='/' className='text-white hover:font-bold'>
          👉 Go to sign in
        </Link>
      </div>
    </div>
  );
}
