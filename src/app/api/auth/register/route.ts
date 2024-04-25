import { connectDB } from "@/DBconfig/connect";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
	try {
		connectDB();
		const body = await req.json();

		const user = await User.findOne({ email: body.email });
		if (user) {
			return NextResponse.json(
				{ success: false, message: "User exists with this email" },
				{ status: 200 }
			);
		} else {
			const salt = bcrypt.genSaltSync(10);
			const hash = bcrypt.hashSync(body.password, salt);

			const user = await User.create({
				name: body.name,
				email: body.email,
				password: hash,
			});
			return NextResponse.json(
				{ success: true, message: "Registered successfully" },
				{ status: 200 }
			);
		}
	} catch (error) {
		return NextResponse.json(
			{ success: false, error, message: "Something error happened" },
			{ status: 200 }
		);
	}
}
