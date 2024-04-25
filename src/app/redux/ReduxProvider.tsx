"use client";

import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

interface Proptype {
	children: React.ReactNode;
}

const ReduxProvider = ({ children }: Proptype) => {
	useEffect(() => {
		console.log("hellow");
	}, []);

	return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
