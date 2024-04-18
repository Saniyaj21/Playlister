import { connectDB } from "@/DBconfig/connect";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export async function GET() {
	connectDB();

	return NextResponse.json({
		message: "Sever is Healty.",
	});
}
