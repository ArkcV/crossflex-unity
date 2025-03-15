
import { getServerSession } from "next-auth";

export default async function Layout ({ children }: { children: React.ReactNode })  {

  const session = await getServerSession();

  return (
    <>
      <div className="flex min-h-screen">
        <div className="w-full ml-16 md:ml-64 bg-gray-cf_gray1">
          {children}
        </div>
      </div>
    </>
  )
}


