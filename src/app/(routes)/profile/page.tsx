'use client';

import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function ProfilePage() {
  const [userData, setUserData]: any = React.useState('nothing');

  const router = useRouter();
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

  const getUserDetails = async () => {
    const response = await axios.get('/api/users/me');
    console.log(response.data.data);
    setUserData(response.data.data);
  };

  return (
    <div>
      <h1>Profile Page</h1>
      {userData === 'nothing' ? (
        'Nothing'
      ) : (
        <Link href={`/profile/${userData.username}`}>
          id:{' ' + userData.username}
        </Link>
      )}
      <p>firstNme: {' ' + userData.firstName}</p>
      <p>lastName: {' ' + userData.lastName}</p>

      <div>
        <Button onClick={logout}>Logout</Button>

        <Button onClick={getUserDetails}>Get Details</Button>
      </div>
    </div>
  );
}

export default ProfilePage;
