"use client";
import { base_url } from "@/helpers/constans";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";

const Page = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		// Here you can add your form submission logic
		console.log("Email:", email);
		console.log("Password:", password);
		// Reset the form after submission

		try {
			const res = await axios.post(
				base_url + "/api/user/login",
				{
					email: email,
					password: password,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
					withCredentials: true,
				}
			);

			console.log(res);
		} catch (error) {
			console.error("Error fetching data:", error);
		}



		setEmail("");
		setPassword("");
	};

	return (
		<div className='min-h-screen bg-gray-100 flex justify-center items-center'>
			<form
				onSubmit={handleSubmit}
				className='bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4'
			>
				<div className='mb-4'>
					
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='email'
					>
						Email
					</label>

					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						id='email'
						type='text'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder='Enter your email'
					/>
				</div>
				<div className='mb-6'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='password'
					>
						Password
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						id='password'
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder='********'
					/>
				</div>
				<div className='flex items-center justify-between w-full'>
					<button className='flex justify-center items-center gap-2  bg-blue-600 hover:bg-white text-white text-md font-primary border-2 border-blue-600 hover:text-blue-600 transition-all w-full h-10 rounded-md hover:gap-5'>
						Login <AiOutlineLogin />
					</button>
				</div>
				<div className='text-center mt-4'>
					<Link href={"/signup"} className='text-blue-500 font-primary hover:text-blue-700'>
						Dont have an account? Signup here.
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Page;
