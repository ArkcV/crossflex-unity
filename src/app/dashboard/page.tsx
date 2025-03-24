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
    <div className="flex p-4 gap-4 flex-col md:flex-row">
     Dashboard
    </div>
  );
}
