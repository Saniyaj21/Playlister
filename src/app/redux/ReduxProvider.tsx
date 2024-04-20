'use client'

import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

interface Proptype {
	children: React.ReactNode;
}

const ReduxProvider = ({ children }: Proptype) => {
	return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
