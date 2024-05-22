"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import axios from "axios";
import { Button } from "@/components/ui/button";

function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/login");
    } catch (error: any) {
      //TODO: Toast message
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const formSchema = z.object({
    email: z.string().min(3),
    password: z.string().min(8).max(25),
    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters" })
      .max(15),
  });

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-around border-2 border-zinc-400">
        <input
          type="email"
          placeholder="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <input
          type="text"
          placeholder="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <Button onClick={onSignup}>
          {buttonDisabled ? "Fill in the fileds" : "Signup"}
        </Button>
        <p className="w-fit mx-auto my-2">{loading ? " Processing..." : ""}</p>
        <Link href="/login">Already have an account? Login</Link>
      </div>
    </div>
  );
}

export default SignupPage;
