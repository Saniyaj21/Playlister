import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

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
			</head>
			<body className={inter.className}>
				<Header />
				<div>{children}</div>
			</body>
		</html>
	);
}
