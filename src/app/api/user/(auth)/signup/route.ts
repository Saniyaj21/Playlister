import { connectDB } from "@/DBconfig/connect";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import * as jose from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		connectDB();

		const { name, email, password } = await req.json();

		// hashing the password
		const hash = bcrypt.hashSync(password, 8);

		const user = await User.create({
			name,
			email,
			password: hash,
		});

		const secret = new TextEncoder().encode(process.env.JWT_SECRET);
		const alg = "HS256";

		const jwt = await new jose.SignJWT({})
			.setProtectedHeader({ alg })
			.setExpirationTime("72h")
			.setSubject(user._id.toString())
			.sign(secret);

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
