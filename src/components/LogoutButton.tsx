"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { TbLogout } from "react-icons/tb";
import { ImSpinner2 } from "react-icons/im";

const LogoutButton = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setLoading(true);
    await signOut({ redirect: false });

    setTimeout(() => {
      router.push("/login");
    }, 1500);
  };

  return (
    <button 
      onClick={handleLogout} 
      disabled={loading} 
      className="w-full cursor-pointer text-center disabled:opacity-50"
    >
      <div className="flex items-center space-x-2 text-white py-10 px-2 text-white-cf_white">
        {loading ? (
          <span className="text-xl flex items-center p-2 animate-spin">
            <ImSpinner2 /> 
          </span>
        ) : (
          <span className="text-xl flex items-center p-2">
            <TbLogout />
          </span>
        )}
        <span className="flex">{loading ? "Saindo..." : "Sair"}</span>
      </div>
    </button>
  );
}

export default LogoutButton