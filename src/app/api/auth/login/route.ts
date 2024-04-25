import { connectDB } from "@/DBconfig/connect";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
	try {
		connectDB();
		const body = await req.json();

		const user = await User.findOne({ email: body.email });
		if (!user) {
			return NextResponse.json(
				{ success: false, message: "User not found" },
				{ status: 200 }
			);
		}

		const isMatch = await bcrypt.compare(body.password, user.password);
		if (!isMatch) {
			return NextResponse.json(
				{ success: false, message: "Email or password is incorrect" },
				{ status: 200 }
			);
		}

		return NextResponse.json(
			{ success: true, message: "Login Successfull" },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ success: false, error, message: "Something error happened" },
			{ status: 200 }
		);
	}
}
