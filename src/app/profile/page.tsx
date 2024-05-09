"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ProfilePage = () => {
  const session = useSession();
  const router = useRouter();
  if (session.status === "unauthenticated") return;

  // console.log(session);
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black bg-dot-white/[0.2]">
      <div className="bg-white rounded-lg drop-shadow-md p-4 m-10 w-full flex flex-col justify-center items-center gap-4">
        <h1 className="text-2xl font-bold">Your Profile</h1>
        <Image
          src={session.data?.user?.image as string}
          width={100}
          height={100}
          alt="avatar"
          className="rounded-[100px] border-2 border-gray-200 drop-shadow-md"
        />
        <h3 className="font-normal text-xl text-gray-900">
          {session.data?.user?.name as string}
        </h3>
        <h3 className="font-normal text-xl text-gray-900">
          {session.data?.user?.email as string}
        </h3>
        <button 
          className="bg-black rounded-lg"
          onClick={() => router.push("/logout")}
        >
          <span className="bg-blue-500 block p-4 -translate-y-1 hover:-translate-y-2 active:translate-x-0 active:translate-y-0 transition-all border-2 border-black text-xl font-semibold text-white rounded-lg">
            Sign Out
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
