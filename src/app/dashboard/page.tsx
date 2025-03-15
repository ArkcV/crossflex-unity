"use client"

import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";

export default function Dashboard() {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    async function fetchSession() {
      const sessionData = await getSession();
      setSession(sessionData);
    }
    fetchSession();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {session ? (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h1 className="text-2xl font-bold text-gray-800">Bem-vindo, {session.user?.name}!</h1>
          <p className="text-gray-600">Email: {session.user?.email}</p>
        </div>
      ) : (
        <div className="text-red-500 text-xl font-semibold">Por favor, faça login...</div>
      )}
    </div>
  );
}
