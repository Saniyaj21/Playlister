"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import Sidebar from "./Sidebar";
import { useSession } from "next-auth/react";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const session = useSession();

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<header className=' bg-green px-[10%] max-sm:px-[5%]'>
			<nav className='container mx-auto flex justify-between items-center h-[10vh]'>
				<Link href={"/"} className='text-xl font-bold'>
					<Image
						priority
						className='cursor-pointer h-auto'
						src={"/media/logo.svg"}
						width={150}
						height={100}
						alt='Playlister'
					></Image>
				</Link>
				<div className='flex gap-8'>
					{session ? (
						<div className=''>
							<Image
								className='cursor-pointer'
								onClick={toggleMenu}
								src={"/media/default_profile.svg"}
								width={40}
								height={40}
								alt='Profile'
							></Image>
						</div>
					) : (
						<div>
							<Link
								href='/login'
								className='flex justify-center items-center gap-2 bg-transparent hover:bg-blue-600 text-blue-600 text-md font-primary border-2 border-blue-600 hover:text-white transition-all w-28 h-10 rounded-md hover:gap-5'
							>
								Login <AiOutlineLogin />
							</Link>
						</div>
					)}
				</div>
			</nav>

			<Sidebar isOpen={isOpen} />
		</header>
	);
};

export default Header;
