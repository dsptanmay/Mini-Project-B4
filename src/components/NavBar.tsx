import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";
import React from "react";

function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <button type="submit">Sign In</button>
    </form>
  );
}

const NavBarComponent = async () => {
  const session = await auth();
  return (
    <nav className="flex w-full items-center justify-between border-b-2 border-gray-300 p-5 text-xl font-semibold bg-[#2586ed] text-white ">
      <div className="text-2xl">Blockchain Crowdfunding</div>
      <div className="flex flex-row items-center gap-4">
        <Link href={"/about"}>About</Link>
        <Link href={"/my-campaigns"}>My Campaigns</Link>
        {session?.user && <Link href={"/logout"}>Sign Out</Link>}
        {!session?.user && <SignIn />}
      </div>
    </nav>
  );
};

export default NavBarComponent;
