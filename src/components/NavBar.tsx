"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const NavBarComponent = () => {
  const session = useSession();
  const router = useRouter();
  return (
    <nav className="flex w-full items-center justify-between border-b-2 border-white p-5 text-xl font-semibold bg-[#2586ed] text-white ">
      <div className="text-2xl">Blockchain Crowdfunding</div>
      <div className="flex flex-row items-center gap-4">
        <Link href={"/about"}>About</Link>
        <Link href={"/my-campaigns"}>My Campaigns</Link>
        {session?.data?.user && (
          <Image
            src={session.data.user.image as string}
            alt="Avatar"
            width={50}
            height={50}
            className="rounded-[100px] border-gray-700 border-2 cursor-pointer"
            onClick={() => router.push("/profile")}
          />
        )}
        {!session?.data?.user && <Link href={"/login"}>Sign In</Link>}
      </div>
    </nav>
  );
};

export default NavBarComponent;
