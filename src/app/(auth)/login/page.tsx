"use client";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e: any) => {
		e.preventDefault();
		// Here you can add your form submission logic
		console.log("Email:", email);
		console.log("Password:", password);
		// Reset the form after submission
		setEmail("");
		setPassword("");
	};

	return (
		<div className='min-h-screen bg-gray-100 flex justify-center items-center'>
			<form
				onSubmit={handleSubmit}
				className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
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
					<button
						className='w-full  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
						type='submit'
					>
						Sign In
					</button>
				</div>
				<div className='text-center mt-4'>
					<Link href={"/signup"} className='text-blue-500 hover:text-blue-700'>
						Dont have an account? Signup here.
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Page;
