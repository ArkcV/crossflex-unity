
import Header from "@/components/Header";
import Sidebar from "../../components/Sidebar";
import { getServerSession } from "next-auth";

export default async function Layout({ children }: { children: React.ReactNode }) {

  const session = await getServerSession();

  return (
    <div>
      <div className="flex">
        <Sidebar session={session} />
        <div className="w-full ml-16 md:ml-56">
          <Header />
          {children}
        </div>
      </div>
    </div>
  )
}


