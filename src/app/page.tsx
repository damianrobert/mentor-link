'use client';

import Button from '@/components/button';
import Link from 'next/link';
import { UserType } from '@/types/userType';
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';

export default function Home() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    setUser({ email: '', password: '' });
  }, []);

  return (
    <div className='min-h-screen bg-slate-800 text-zinc-300 flex flex-col justify-center items-center'>
      <div className='rounded-md p-8 min-w-64 flex flex-col justify-center items-center bg-slate-700 border-2 border-black'>
        <p className='mb-10 text-3xl tracking-widest font-bold'>SIGN IN</p>
        <div className='my-2'>
          <p>Email</p>
          <Input
            className='my-2 text-gray-600'
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />

          <p>Password</p>
          <Input
            className='my-2 text-gray-600'
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <Button name='LOG IN'></Button>
        <Link href='signup' className='text-white hover:font-bold'>
          👉 Click here to sign up
        </Link>
      </div>
    </div>
  );
}
