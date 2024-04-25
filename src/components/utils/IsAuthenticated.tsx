import { getServerSession } from "next-auth";
import React from "react";

interface propType {
	auth: React.ReactNode;
	notAuth: React.ReactNode;
}
const IsAuthenticated = ({ auth, notAuth }: propType) => {
   
	return <>
    
    </>;
};

export default IsAuthenticated;
