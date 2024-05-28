'use client';

import React, { useState } from 'react';
import NavBar from '@/components/client/NavBar';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import { UserRound } from 'lucide-react';
import UserSideConv from '@/components/client/UserSideConv';

function ChatRoom() {
  const [sideConversations, setSideConversations] = useState(false);

  const toggleConversations = () => {
    setSideConversations(!sideConversations);
  };

  return (
    <div className='min-h-screen flex flex-col bg-zinc-100 p-1'>
      <NavBar />

      <div className='flex flex-grow max-h-screen p-1'>
        <div
          className={`${
            sideConversations === false ? 'hidden' : ''
          } md:flex md:flex-col bg-zinc-200 rounded-md border-2 border-gray-300 w-full md:w-1/5 mr-1 p-1`}
        >
          <UserSideConv sideConversation={sideConversations} />
          <UserSideConv />
          <UserSideConv />
          <UserSideConv />
        </div>

        <div
          className={`${
            sideConversations === false ? '' : 'hidden'
          } bg-zinc-300 rounded-md border-2 border-gray-400 md:block w-full md:w-4/5`}
        >
          <div className='flex items-center border-b-2 border-gray-400 p-4 w-full'>
            <div
              className='hover:cursor-pointer md:hidden'
              onClick={toggleConversations}
            >
              <ChevronLeft size={25} />
            </div>

            <div className='flex items-center mx-2'>
              <div className='w-fit rounded-full p-2 border-[.1rem] border-black bg-gray-300'>
                <UserRound size={14} />
              </div>

              <div className='ml-4'>John Doe</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
