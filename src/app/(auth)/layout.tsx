import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-zinc-200">
      <div>
        <div className="flex text-[6rem] font-bold">
          <p className="text-[#4490db]">Mentor</p>
          <p className="text-[#44cb8c]">Link</p>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
