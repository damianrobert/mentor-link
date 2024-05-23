'use client';

import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

function ProfilePage() {
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

  return (
    <div>
      ProfilePage
      <div>
        <Button onClick={logout} className=''>
          Logout
        </Button>
      </div>
    </div>
  );
}

export default ProfilePage;
