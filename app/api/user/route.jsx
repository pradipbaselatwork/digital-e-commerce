import { usersTable } from "@/configs/schema";
import { db } from "@/configs/db"; // Make sure your db instance is properly imported
import { eq } from "drizzle-orm"; // Assuming you're using drizzle-orm
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { user } = await req.json(); // Get user from the request body

        if (!user || !user.primaryEmailAddress) {
            return NextResponse.json({ error: "Invalid user data" }, { status: 400 });
        }

        // Check if user already exists in the database
        const userData = await db
            .select()
            .from(usersTable)
            .where(eq(usersTable.email, user.primaryEmailAddress.emailAddress));

        if (userData?.length > 0) {
            // Return existing user data
            return NextResponse.json(userData[0]);
        }

        // Insert a new user if not found
        const result = await db
            .insert(usersTable)
            .values({
                name: user.fullName,
                email: user.primaryEmailAddress.emailAddress,
                image: user.imageUrl
            })
            .returning();

        return NextResponse.json(result[0]);
    } catch (error) {
        console.error("Error in API route:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
