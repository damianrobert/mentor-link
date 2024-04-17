"use client";

import Button from "@/components/button";
import Link from "next/link";
import { UserType } from "@/types/userType";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  /*useEffect(() => {
    setUser({ email: '', password: '' });
  }, []);*/

  return (
    <div className="min-h-screen bg-slate-800 text-zinc-300 flex flex-col justify-center items-center">
      <UserButton />
    </div>
  );
}
