"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import Sidebar from "./Sidebar";

const Header = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(true);
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => {
		setIsOpen(!isOpen);
		console.log(0);
	};
	return (
		<header className=' bg-gray-200 px-[10%] max-sm:px-[5%]'>
			<nav className='container mx-auto flex justify-between items-center h-[10vh]'>
				<Link href={"/"} className='text-xl font-bold'>
					<Image
						className='cursor-pointer'
						src={"/media/logo.svg"}
						width={150}
						height={150}
						alt='Playlister'
					></Image>
				</Link>
				<div className='flex gap-8'>
					{isAuthenticated ? (
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
								className='flex justify-center items-center gap-2 bg-transparent hover:bg-blue-600 text-blue-600 text-base font-medium border-2 border-blue-600 hover:text-white transition px-3 py-1 rounded-md '
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
