'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function VerifyEmailPage() {
  const [token, setToken] = useState('');
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post('/api/users/verifyemail', { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split('=')[1];
    setToken(urlToken || '');
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1 className='text-4xl p-1'>Verify your email</h1>
      <h2 className='bg-blue-500 text-white text-bold rounded-sm p-1'>
        {token ? `${token}` : 'No token'}

        {verified && (
          <div>
            <h2>Email verified</h2>
            <Link className='text-blue-500 p-1' href='/login'>
              Login
            </Link>
          </div>
        )}

        <Link href='/login'>Go to Login</Link>

        {error && (
          <div>
            <h2 className='text-2xl text-red-600 p-1'>Error</h2>
          </div>
        )}
      </h2>
    </div>
  );
}
