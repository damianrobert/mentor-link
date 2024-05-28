'use client';

import React, { useState } from 'react';
import { BrainCircuit } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';

function NavBar() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const goToHome = () => {
    router.push('/');
  };

  const goToProfile = () => {
    router.push('/profile');
  };

  const goToChat = () => {
    router.push('/chat');
  };

  const goToForum = () => {
    router.push('/forum');
  };

  const goToDashboard = () => {
    router.push('/dashboard');
  };

  return (
    <nav className='w-full border-b-2 border-[#eeeeee] bg-[#f9f9f9] p-4 flex justify-between'>
      <div
        className='flex bg-gradient-to-r from-[#3b6592] to-[#47a13d] px-1 rounded-sm text-zinc-100 hover:cursor-pointer select-none'
        onClick={goToHome}
      >
        <div className='mr-2'>MentorLink</div>
        <div>
          <BrainCircuit size={25} />
        </div>
      </div>
      <div className='md:hidden hover:cursor-pointer' onClick={toggleMenu}>
        <Menu size={25} />
      </div>

      <div className='hidden md:flex'>
        <div
          className='mx-4 hover:cursor-pointer hover:text-black hover:font-semibold text-[1.1rem] border-b-2 border-zinc-300'
          onClick={goToProfile}
        >
          Profil
        </div>
        <div
          className='mx-4 hover:cursor-pointer hover:text-black hover:font-semibold text-[1.1rem] border-b-2 border-zinc-300'
          onClick={goToChat}
        >
          Conversații
        </div>
        <div
          className='mx-4 hover:cursor-pointer hover:text-black hover:font-semibold text-[1.1rem] border-b-2 border-zinc-300'
          onClick={goToForum}
        >
          Forum
        </div>
        <div
          className='mx-4 hover:cursor-pointer hover:text-black hover:font-semibold text-[1.1rem] border-b-2 border-zinc-300'
          onClick={goToDashboard}
        >
          Centru de control
        </div>
      </div>

      <div
        className={`${
          showMenu === false ? 'hidden' : 'block'
        } w-[13rem] min-h-screen bg-gray-100 border-l-2 border-gray-300 z-50 absolute right-0 top-0 p-1`}
      >
        <div
          className='absolute right-4 top-4 hover:cursor-pointer'
          onClick={toggleMenu}
        >
          <X size={25} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
