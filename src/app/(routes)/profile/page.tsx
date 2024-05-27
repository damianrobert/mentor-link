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
    await setUserData(response.data.data);

    router.push(`/profile/${response.data.data.username}`);
  };

  React.useEffect(() => {
    getUserDetails();
  }, []);

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

      <div>
        <Button onClick={logout}>Logout</Button>
      </div>
    </div>
  );
}

export default ProfilePage;
