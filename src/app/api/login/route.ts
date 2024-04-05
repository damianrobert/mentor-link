import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/../prisma/client";

const userSchema = z.object({
    firstName: z.string().min(1).max(20),
    lastName: z.string().min(1).max(20),
    email: z.string().min(1).max(40),
    password: z.string().min(1).max(25)
})

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = userSchema.safeParse(body);

    if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });
    const newUser = await prisma.User.create({
        data: { firstName: body.firstName, lastName: body.lastName, email: body.email, password: body.password }
    })

    return NextResponse.json(newUser, { status: 201 })
}