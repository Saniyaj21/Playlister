import { base_url } from "@/helpers/constans";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface CounterState {
	user: {};
	isAuthenticated: boolean;
	status: {
		logoutStatus: string;
		loginStatus: string;
		signupStatus: string;
	};
	error: string | undefined;
}

const initialState: CounterState = {
	user: {},
	isAuthenticated: false,
	status: {
		logoutStatus: "idle",
		loginStatus: "idle",
		signupStatus: "idle",
	},
	error: "",
};

// logout user
export const logoutUser = createAsyncThunk("user/logoutUser", async () => {
	const response = await axios.get(`${base_url}/api/user/logout`, {
		headers: {
			"Content-Type": "application/json",
		},
		withCredentials: true,
	});
	console.log(response);

	return response.data;
});

// login user
export const loginUser = createAsyncThunk(
	"user/loginUser",
	async ({ email, password }: { email: string; password: string }) => {
		const response = await axios.post(
			`${base_url}/api/user/login`,
			{
				email,
				password,
			},
			{
				headers: {
					"Content-Type": "application/json",
				},
				withCredentials: true,
			}
		);
		console.log(response);

		return response.data;
	}
);

// login user
export const signupUser = createAsyncThunk(
	"user/signupUser",
	async ({
		name,
		email,
		password,
	}: {
		name: string;
		email: string;
		password: string;
	}) => {
		const response = await axios.post(
			`${base_url}/api/user/signup`,
			{ name, email, password },
			{
				headers: {
					"Content-Type": "application/json",
				},
				withCredentials: true,
			}
		);
		console.log(response);

		return response.data;
	}
);

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		// increment: (state) => {
		// 	// Redux Toolkit allows us to write "mutating" logic in reducers. It
		// 	// doesn't actually mutate the state because it uses the Immer library,
		// 	// which detects changes to a "draft state" and produces a brand new
		// 	// immutable state based off those changes
		// 	state.value += 1;
		// },
	},

	extraReducers: (builder) => {
		builder

			// logout user
			.addCase(logoutUser.pending, (state) => {
				state.status.logoutStatus = "loading";
			})
			.addCase(logoutUser.fulfilled, (state, action) => {
				if (action.payload.success) {
					state.status.logoutStatus = "succeeded";
					state.user = {};
					state.isAuthenticated = false;
				} else {
					state.status.logoutStatus = "failed";
				}
			})
			.addCase(logoutUser.rejected, (state, action) => {
				state.status.logoutStatus = "failed";
				state.error = "Something went wrong";
			})

			// login user
			.addCase(loginUser.pending, (state) => {
				state.status.loginStatus = "loading";
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				if (action.payload.success) {
					state.status.loginStatus = "succeeded";
					state.user = action.payload.user;
					state.isAuthenticated = true;
				} else {
					state.status.loginStatus = "failed";
				}
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.status.loginStatus = "failed";
				state.error = "Something went wrong";
			})

			// signup user
			.addCase(signupUser.pending, (state) => {
				state.status.signupStatus = "loading";
			})
			.addCase(signupUser.fulfilled, (state, action) => {
				if (action.payload.success) {
					state.status.signupStatus = "succeeded";
					state.user = action.payload.user;
					state.isAuthenticated = true;
				} else {
					state.status.signupStatus = "failed";
				}
			})
			.addCase(signupUser.rejected, (state, action) => {
				state.status.signupStatus = "failed";
				state.error = "Something went wrong";
			});
	},
});

// Action creators are generated for each case reducer function
// export const { increment } = userSlice.actions;

export default userSlice.reducer;

// Export any actions you need
export const selectUser = (state: any) => state.user;
