import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { ChatInterface } from "@/components/chat-interface"
import { db } from "@/lib/db"

export default async function ChatPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  // Fetch the user's chat history
  const chatHistory = await db.message.findMany({
    where: {
      userId: session.user.id,
    },
    orderBy: {
      createdAt: "asc",
    },
  })

  return (
    <div className="flex flex-col h-screen">
      <header className="border-b p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="font-bold">AI Chat</h1>
          <div className="flex items-center gap-4">
            <span>{session.user.email}</span>
            <form action="/api/auth/signout" method="POST">
              <button type="submit" className="text-sm text-slate-600 hover:text-slate-900">
                Sign out
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto p-4 overflow-hidden">
        <ChatInterface initialMessages={chatHistory} />
      </main>
    </div>
  )
}
