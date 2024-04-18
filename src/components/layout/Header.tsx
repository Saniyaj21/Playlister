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
					PlayLister
				</Link>
				<div className='flex gap-8'>
					<ul className='flex gap-4 justify-center items-center font-semibold'>
						<li>
							<Link href='/' className='hover:text-blue-600 transition'>
								Lists
							</Link>
						</li>
						<li>
							<Link href='/' className='hover:text-blue-600 transition'>
								About
							</Link>
						</li>
					</ul>

					{isAuthenticated ? (
						<div className=''>
							<Image
							className="cursor-pointer"
								onClick={toggleMenu}
								src={"/default_profile.svg"}
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