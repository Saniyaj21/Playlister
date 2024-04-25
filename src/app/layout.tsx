import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import NextAuthProvider from "@/authProvider/NextAuthProvider";

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
				<link rel='icon' href='/favicon.ico'  />

				<link
					rel='icon'
					href='/icon'
					type='image/png'
					
				/>

				<link
					rel='apple-touch-icon'
					href='/apple-icon'
					type='image/png'
				/>

				{/* font */}
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Sriracha&display=swap'
					rel='stylesheet'
				/>
			</head>
			<body>
				<NextAuthProvider>
					<Header />
					{children}
				</NextAuthProvider>
			</body>
		</html>
	);
}
