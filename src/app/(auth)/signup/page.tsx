"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const SignupPage = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		// Basic validation for password matching
		if (password !== confirmPassword) {
			alert("Passwords do not match!");
			return;
		}
		try {
			const res = await axios.post(
				"http://localhost:3000/api/user/signup",
				{
					name: name,
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
		setName("");
		setEmail("");
		setPassword("");
		setConfirmPassword("");
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
						htmlFor='name'
					>
						Name
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						id='name'
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder='Enter your name'
					/>
				</div>
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
				<div className='mb-4'>
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
				<div className='mb-6'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='confirmPassword'
					>
						Confirm Password
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						id='confirmPassword'
						type='password'
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						placeholder='********'
					/>
				</div>
				<div className='flex items-center justify-between w-full'>
					<button
						className=' w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
						type='submit'
					>
						Sign Up
					</button>
				</div>

				<div className='text-center mt-4'>
					<Link href='/login' className='text-blue-500 hover:text-blue-700'>
						Already have an account? Login here.
					</Link>
				</div>
			</form>
		</div>
	);
};

export default SignupPage;
