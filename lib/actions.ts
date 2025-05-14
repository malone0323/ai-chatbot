"use server"

import { hash } from "bcrypt"
import { db } from "@/lib/db"
import type { Message } from "@/lib/types"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export async function createUser(data: { name: string; email: string; password: string }) {
  try {
    // Check if user already exists
    const existingUser = await db.user.findUnique({
      where: { email: data.email },
    })

    if (existingUser) {
      return { success: false, error: "User with this email already exists" }
    }

    // Hash the password
    const hashedPassword = await hash(data.password, 10)

    // Create the user
    await db.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
      },
    })

    return { success: true }
  } catch (error) {
    console.error("Error creating user:", error)
    return { success: false, error: "Failed to create user" }
  }
}

export async function saveMessages(messages: Message[]) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return { success: false, error: "Not authenticated" }
    }

    // Delete existing messages for this user (simplified approach)
    await db.message.deleteMany({
      where: { userId: session.user.id },
    })

    // Create new messages
    await db.message.createMany({
      data: messages.map((msg) => ({
        id: msg.id,
        role: msg.role,
        content: msg.content,
        userId: session.user.id,
      })),
    })

    return { success: true }
  } catch (error) {
    console.error("Error saving messages:", error)
    return { success: false, error: "Failed to save messages" }
  }
}
