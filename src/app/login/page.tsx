import { signIn } from "@/auth";
import Image from "next/image";
import React from "react";

const LoginPage = async () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center dark:bg-black dark:bg-dot-white/[0.2] bg-white bg-dot-black/[0.2] p-20">
      <div className="bg-white rounded-lg drop-shadow-lg p-14 flex flex-col items-center justify-around gap-8 ">
        <h1 className="text-5xl font-bold">Login</h1>
        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/" });
          }}
        >
          <button className="bg-black rounded-lg" type="submit">
            <span className="bg-gray-100 flex p-4 -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 rounded-lg transition-all border-2 border-black text-xl font-semibold items-center justify-center flex-row gap-4">
              <Image
                alt="google-logo"
                src={"https://www.svgrepo.com/show/475656/google-color.svg"}
                width={30}
                height={30}
              />
              Sign In With Google
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
