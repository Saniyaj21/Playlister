import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Playlister",
	description: "Save your videos in a custom Playlist",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	return (

		<html lang='en'>
			
			<head>

				<link rel='icon' href='/favicon.ico' sizes='any' />

				<link
					rel='icon'
					href='/icon?<generated>'
					type='image/<generated>'
					sizes='<generated>'
				/>

				<link
					rel='apple-touch-icon'
					href='/apple-icon?<generated>'
					type='image/<generated>'
					sizes='<generated>'
				/>

				{/* font */}
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Sriracha&display=swap'
					rel='stylesheet'
				/>
			</head>
			<body className={inter.className}>
				<Header />
				<div>{children}</div>
			</body>
		</html>
	);
}
