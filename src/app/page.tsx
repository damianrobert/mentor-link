'use client';

import Button from '@/components/button';
import Link from 'next/link';
import { UserType } from '@/types/userType';
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className='min-h-screen bg-zinc-200 text-slate-600 flex flex-col justify-center items-center relative'></div>
  );
}
