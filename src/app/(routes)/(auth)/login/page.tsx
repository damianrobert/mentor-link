'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function LoginPage() {
  const router = useRouter();

  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post('/api/users/login', user);
      console.log('Login success', response.data);
      //TODO: toast success message

      //redirect to the dashboard
      router.push('/profile');
    } catch (error: any) {
      //TODO: toast error message
      console.log('Login failed', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <div>
      <div className='flex flex-col justify-around bg-zinc-300 p-6 rounded-md'>
        <div className='my-2'>
          <Input
            type='email'
            placeholder='Email'
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>

        <div className='my-2'>
          <Input
            type='Password'
            placeholder='Password'
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>

        <Button onClick={onLogin}>
          {buttonDisabled ? 'Fill in the fields' : 'Login'}
        </Button>
        <p className='w-fit mx-auto my-2'>{loading ? ' Processing...' : ''}</p>
        <Link href='/signup'>
          Don't have an account? Go to{' '}
          <p className='underline inline'>signup</p> page
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
