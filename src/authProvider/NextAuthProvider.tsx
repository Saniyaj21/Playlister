'use client'

import { SessionProvider } from "next-auth/react";
import React from "react";

interface PropType {
	children?: React.ReactNode;
}

const NextAuthProvider = ({ children }: PropType) => {
	return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthProvider;
