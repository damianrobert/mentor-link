import Link from "next/link";
import Button from "@/components/button";

export default function Signup() {
  return (
    <div className="min-h-screen bg-slate-800 text-zinc-300 flex flex-col justify-center items-center">
      <div className="rounded-md p-8 min-w-64 flex flex-col justify-center items-center bg-slate-700">
        <p className="mb-10 text-3xl tracking-widest font-bold">SIGN UP</p>
        <input
          className="mb-6 rounded-sm px-1 text-gray-800 font-semibold outline-none"
          type="text"
          placeholder="First Name"
        />
        <input
          className="mb-6 rounded-sm px-1 text-gray-800 font-semibold outline-none"
          type="text"
          placeholder="Last Name"
        />
        <input
          className="mb-6 rounded-sm px-1 text-gray-800 font-semibold outline-none"
          type="email"
          placeholder="Email"
        />
        <input
          className="mb-6 rounded-sm px-1 text-gray-800 font-semibold outline-none"
          type="password"
          placeholder="Password"
        />
        <Button name="SUBMIT" >
        </Button>

        <Link href="/" className="text-white hover:font-bold">
          👉 Go to sign in
        </Link>
      </div>
    </div>
  );
}
