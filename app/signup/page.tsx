import { SignupForm } from "@/components/signup-form"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function SignupPage() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect("/chat")
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Create Account</h1>
          <p className="text-sm text-slate-600 mt-2">Sign up to start chatting with our AI assistant</p>
        </div>
        <SignupForm />
      </div>
    </div>
  )
}
