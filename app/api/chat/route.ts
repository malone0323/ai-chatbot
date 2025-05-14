import { exec } from "child_process"
import { promisify } from "util"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { NextResponse } from "next/server"
import path from "path"

const execPromise = promisify(exec)

export async function POST(req: Request) {
  // Check authentication
  const session = await getServerSession(authOptions)

  if (!session) {
    return new Response("Unauthorized", { status: 401 })
  }

  try {
    const { message, history } = await req.json()

    // Prepare the chat history in a format suitable for your Python script
    const formattedHistory = JSON.stringify(history)

    // Escape quotes in the message and history to prevent command injection
    const escapedMessage = message.replace(/"/g, '\\"')
    const escapedHistory = formattedHistory.replace(/"/g, '\\"')

    // Path to your Python script (adjust as needed)
    const pythonScriptPath = path.join(process.cwd(), "python", "rag_v4_cuda.py")

    // Execute the Python script with the message as an argument
    const { stdout, stderr } = await execPromise(`python "${pythonScriptPath}" "${escapedMessage}" "${escapedHistory}"`)

    if (stderr) {
      console.error("Python script error:", stderr)
      return NextResponse.json({ error: "Error processing your request" }, { status: 500 })
    }

    // Parse the output from the Python script
    const answer = stdout.trim()

    return NextResponse.json({ answer })
  } catch (error) {
    console.error("Error processing chat request:", error)
    return NextResponse.json({ error: "Error processing your request" }, { status: 500 })
  }
}
