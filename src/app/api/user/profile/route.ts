import { reqUser } from "@/helpers/findUser";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	// const user = await reqUser(req);
   
    // console.log("request user", user);

	return NextResponse.json({
		message: "User Profile",

	});
}
