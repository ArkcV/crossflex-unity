"use client"

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { TbLogout } from "react-icons/tb";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/login");
  };

  return (
    <button onClick={handleLogout} className="w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center">
      <div className="flex items-center space-x-2 text-white md:py-2 md:px-6 text-white-cf_white">
        <span className="text-xl flex items-center p-2"><TbLogout /></span> <span className="md:flex hidden">Sair</span>
      </div>
    </button>
  );
}
