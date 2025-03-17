
import Sidebar from "../../components/Sidebar";
import { getServerSession } from "next-auth";

export default async function Layout({ children }: { children: React.ReactNode }) {

  const session = await getServerSession();

  return (
    <div>
      <Sidebar session={session} />
      {children}
    </div>
  )
}


