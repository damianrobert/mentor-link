"use client";

import Button from "@/components/button";
import Link from "next/link";
import { UserType } from "@/types/userType";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-200 text-slate-600 flex flex-col justify-center items-center relative">
      <div className="">
        <UserButton />
      </div>

      <div className="absolute top-[2rem] ">
        <div className="flex text-[6rem] font-bold">
          <p className="text-[#4490db]">Mentor</p>
          <p className="text-[#44cb8c]">Link</p>
        </div>
      </div>
    </div>
  );
}
