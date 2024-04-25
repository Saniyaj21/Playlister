import { connectDB } from "@/DBconfig/connect";
import User from "@/models/userModel";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";

export const reqUser = async (req: NextRequest) => {
	connectDB();

	// Check for cookie
	const cookie = cookies().get("token");
	if (!cookie) {
		return NextResponse.redirect(new URL("/login", req.url));
	}
	// Validate it
	const secret = new TextEncoder().encode(process.env.JWT_SECRET);
	const jwt = cookie.value;
	try {
		const { payload } = await jose.jwtVerify(jwt, secret, {});
		const user = await User.findById(payload.sub);
		if (!user) {
			return NextResponse.redirect(new URL("/login", req.url));
		}
		return user;
	} catch (err) {
		return NextResponse.redirect(new URL("/login", req.url));
	}
};
