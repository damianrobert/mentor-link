import React from 'react';
import { ChevronRight } from 'lucide-react';
import { UserRound } from 'lucide-react';

function UserSideConv({ params, sideConversation }: any) {
  return (
    <div className='border-2 border-white mb-1 rounded-md p-2 flex justify-between items-center'>
      <div className='w-fit rounded-full p-2 border-[.1rem] border-black bg-gray-300'>
        <UserRound size={14} />
      </div>

      <div className='hover:cursor-pointer'>
        <ChevronRight size={25} />
      </div>
    </div>
  );
}

export default UserSideConv;
