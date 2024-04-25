import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";



const page = async() => {
	const sesson = await getServerSession(authOptions);
	if (!sesson) {
		redirect("/login");
	}

	return <h1 className='font-primary text-xl'>Home Page</h1>;
};

export default page;
