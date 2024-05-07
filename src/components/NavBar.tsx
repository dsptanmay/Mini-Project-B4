import Link from "next/link";
import React from "react";

const NavBarComponent = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b-2 border-gray-800 p-5 text-xl font-semibold bg-[#ed9625]">
      <div className="text-2xl">Blockchain Crowdfunding</div>
      <div className="flex flex-row items-center gap-4">
        <Link href={"/about"}>About</Link>
        <Link href={"/profile"}>Profile</Link>
        <Link href={"/wallet"}>Wallet</Link>
      </div>
    </nav>
  );
};

export default NavBarComponent;
