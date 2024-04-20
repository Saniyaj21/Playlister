"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { selectUser, signupUser } from "@/app/redux/slices/userSlice";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";

const SignupPage = () => {
	const dispatch = useAppDispatch();
	const { isAuthenticated } = useAppSelector(selectUser);

	useEffect(() => {
		if (isAuthenticated) {
			redirect("/");
		}
	}, [isAuthenticated]);

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
		dispatch(signupUser({ name, email, password }));

		setName("");
		setEmail("");
		setPassword("");
		setConfirmPassword("");
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
					<button className='flex justify-center items-center gap-2  bg-blue-600 hover:bg-white text-white text-md font-primary border-2 border-blue-600 hover:text-blue-600 transition-all w-full h-10 rounded-md hover:gap-5'>
						Signup <AiOutlineLogin />
					</button>
				</div>

				<div className='text-center mt-4'>
					<Link
						href='/login'
						className='text-blue-500 font-primary hover:text-blue-700'
					>
						Already have an account? Login here.
					</Link>
				</div>
			</form>
		</div>
	);
};

export default SignupPage;
