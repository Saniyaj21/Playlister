import { NextResponse } from "next/server";

export async function GET(req: Request) {
	try {
		let response = NextResponse.json({ success: true, status: 200 });
		response.cookies.delete("token");

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
