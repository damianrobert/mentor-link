'use client';

import Button from "@/components/button";
import Link from "next/link";
import { UserType } from "@/types/userType";
import { useState, useEffect } from "react";

export default function Home() {
  
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    setUser({ email: "", password: "" });
  }, []);
  
  
  return (
    <div className="min-h-screen bg-slate-800 text-zinc-300 flex flex-col justify-center items-center">
      <div className="rounded-md p-8 min-w-64 flex flex-col justify-center items-center bg-slate-700">
        <p className="mb-10 text-3xl tracking-widest font-bold">SIGN IN</p>
        <input
          className="mb-6 rounded-sm px-1 text-gray-800 font-semibold outline-none"
          type="email"
          placeholder="Email"
          value={user.email || ''}
          onChange={e => setUser(prev => ({ ...prev, email: e.target.value }))}
        />
        <input
          className="mb-6 rounded-sm px-1 text-gray-800 font-semibold outline-none"
          type="password"
          placeholder="Password"
          value={user.password || ''}
          onChange={e => setUser(prev => ({ ...prev, password: e.target.value }))}
        />
        <Button name="LOG IN"></Button>

        <Link href="signup" className="text-white hover:font-bold">
          👉 Click here to sign up
        </Link>
      </div>
    </div>
  );
}
