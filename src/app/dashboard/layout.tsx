
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

import { getServerSession } from "next-auth";

export default async function Layout({ children }: { children: React.ReactNode }) {

  const session = await getServerSession();

  return (
    <div className="flex">
      <div className="flex-1 bg-blue-cf_blue p-4">
        <Sidebar />
      </div>
        <div className="flex-[5] p-4">
          <Header />
          {children}
        </div>
    </div>
  )
}


