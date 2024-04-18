import { connectDB } from "@/DBconfig/connect";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
	try {
		connectDB();

		const { name, email, password } = await req.json();
		const user = await User.create({
			name,
			email,
			password,
		});

		return NextResponse.json({
			message: "Signup Successfull",
			user,
		});
	} catch (error) {
		if (error instanceof Error) {
			return NextResponse.json({
				message: error.message,
			});
		} else {
			return NextResponse.json({
				message: "An unexpected error occurred.",
			});
		}
	}
}
