import React from 'react';

function NavBar() {
  return (
    <nav className='absolute top-0 w-full border-2 border-indigo-600 p-4 flex justify-between'>
      <div>*Logo*</div>

      <div className='flex'>
        <div className='mx-1'>Profile</div>
        <div className='mx-1'>Chat</div>
        <div className='mx-1'>Forum</div>
      </div>
    </nav>
  );
}

export default NavBar;
