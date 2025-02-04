

import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";
import { Session } from "next-auth";

export default async function Dashboard() {

  const session = await getServerSession();

  if(!session) {
    redirect("/")
  }
  
   return(
    <>
     <div>
      {session ? (
        <div>{session.user?.name}</div>
      ) : (
        <div>Please log in</div>
      )}
    </div>
      
    </>
   )
}