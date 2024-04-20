"use Client";

import Link from "next/link";
import { RiLogoutCircleLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { RiPlayList2Line } from "react-icons/ri";
import { logoutUser } from "@/app/redux/slices/userSlice";
import { useAppDispatch } from "@/app/redux/hooks";

interface SidebarProps {
	isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
	const dispatch = useAppDispatch();

	const handleLogout = async () => {
		console.log("ji");

		dispatch(logoutUser());
	};
	return (
		<div className='overflow-hidden'>
			<div
				className={`${
					isOpen ? "w-[280px]" : "w-[0px]"
				} fixed bg-gray right-0 transition-all duration-300  h-[90vh]`}
			>
				<div className='flex flex-col gap-1 py-4 px-2'>
					<Link
						href={"/profile"}
						className='flex font-primary items-center gap-3 hover:bg-blue-200 text-base p-3 transition duration-200 rounded'
					>
						<CgProfile /> Profile
					</Link>
					<Link
						href={"/playlists"}
						className='flex font-primary items-center gap-3 hover:bg-blue-200 text-base p-3 transition duration-200 rounded'
					>
						<RiPlayList2Line /> Playlists
					</Link>

					<button
						onClick={handleLogout}
						className='flex font-primary gap-2 items-center justify-center text-base font-medium bg-blue-600 text-white py-2 my-2 rounded '
					>
						Logout <RiLogoutCircleLine />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
