import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-800 text-zinc-300 flex flex-col justify-center items-center">
      <div className="rounded-md p-8 min-w-64 flex flex-col justify-center items-center bg-slate-700">
        <p className="mb-10 text-3xl tracking-widest font-bold">SIGN IN</p>
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
        <button className="bg-zinc-100 w-full rounded-md p-1 text-slate-800 font-bold text-lg mb-6 tracking-widest">
          LOGIN
        </button>

        <Link href="signup" className="text-white hover:font-bold">
          👉 Click here to sign up
        </Link>
      </div>
    </div>
  );
}
