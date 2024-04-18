import { connectDB } from "@/DBconfig/connect";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export async function GET() {
	connectDB();
    const user = await User.create({
        name:'saniyaj2',
        email: 'saniyaj2@gmail.com',
        password: '12345678'
    })
	const users = await User.find();
	return NextResponse.json({
		message: "Sever is Healty.",
		users,
	});
}
