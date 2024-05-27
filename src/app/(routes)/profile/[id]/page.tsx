'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { UserRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import NavBar from '@/components/client/NavBar';

function UserProfilePage({ params }: any) {
  const [userData, setUserData]: any = useState({});
  const [roles, setRoles]: any = useState({});
  const router = useRouter();

  var mentee: boolean;
  var mentor: boolean;
  const getUserDetails = async () => {
    const response = await axios.get('/api/users/me');
    console.log(response.data.data);
    await setUserData(response.data.data);
    await setRoles(response.data.data.roles);
  };

  const logout = async () => {
    try {
      await axios.get('/api/users/logout');
      //TODO: toast success message
      router.push('/login');
    } catch (error: any) {
      console.log('Logout failed', error.message);
      //TODO: toast error message
    }
  };

  var isLoggedOut = false;
  const verifyToken = userData.verifyToken;

  const verifyEmail = async () => {
    await axios.get('/api/users/logout');
    isLoggedOut = true;
    router.push(`/verifyemail?token=${verifyToken}`);
  };

  useEffect(() => {
    getUserDetails();
    console.log(mentor, mentee);
  }, []);

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <NavBar />
      <div className='bg-zinc-100 p-8 rounded-md'>
        <h1 className='text-4xl p-1'>Profile Page</h1>

        <div className='p-2'>
          <div className='w-fit rounded-full p-2 mx-auto border-2 border-black bg-gray-300'>
            <UserRound size={64} />
          </div>
          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>

          <p>
            Roles: {roles.mentee === true ? 'Mentee' : ''}
            {roles.mentor === true ? ', Mentor' : ''}
          </p>

          <div className='w-fit mx-auto my-2'>
            <Button onClick={logout}>Logout</Button>
          </div>
          <div>
            {userData.isVerified === false ? (
              <div className='inline'>
                Your email is not verified. Click{' '}
                <button onClick={verifyEmail} className='underline inline'>
                  here
                </button>{' '}
                to verify your email.
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfilePage;
