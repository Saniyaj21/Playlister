import { connectDB } from "@/DBconfig/connect";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import * as jose from "jose";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		connectDB();

		const { email, password } = await req.json();

		// Lookup the user
		const user = await User.findOne({ email: email });

		if (!user) {
			return NextResponse.json(
				{
					error: "Invalid email or password",
				},
				{ status: 400 }
			);
		}

		// Compare password
		const isCorrectPassword = bcrypt.compareSync(password, user.password);

		if (!isCorrectPassword) {
			return NextResponse.json(
				{
					error: "Invalid email or password",
				},
				{ status: 400 }
			);
		}

		// Create jwt token
		const secret = new TextEncoder().encode(process.env.JWT_SECRET);
		const alg = "HS256";

		const jwt = await new jose.SignJWT({})
			.setProtectedHeader({ alg })
			.setExpirationTime("72h")
			.setSubject(user.id.toString())
			.sign(secret);

		// Respond with it
		let response = NextResponse.json({ success: true, user }, { status: 200 });
		response.cookies.set("token", jwt, {
			maxAge: 3600 * 24 * 3, //for 3 days
			httpOnly: true,
		});

		return response;
	} catch (error) {
		return NextResponse.json(
			{
				message: "An unexpected error occurred.",
			},
			{ status: 500 }
		);
	}
}
