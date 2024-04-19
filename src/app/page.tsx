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
      <h1>LANDING PAGE</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error nesciunt
        aspernatur provident. Nostrum, pariatur! Inventore eos magnam,
        exercitationem blanditiis cumque, voluptate molestiae architecto
        distinctio optio quia quae porro et quod sit sed tenetur modi ratione
        aliquid. Voluptatem, nobis. Sapiente laudantium saepe error eveniet
        facilis sint illum repellat optio odio sunt.
      </p>
    </div>
  );
}
