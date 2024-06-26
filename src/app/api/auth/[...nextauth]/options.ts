import { connectDB } from "@/DBconfig/connect";
import User from "@/models/userModel";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: AuthOptions = {
	pages: {
		signIn: "/login",
		signOut: "/",
	},
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			connectDB();
			try {
				const findUser = await User.findOne({
					email: user?.email,
				});
				if (findUser) {
					return true;
				}
				await User.create({ email: user?.email, name: user?.name });
				return true;


			} catch (error) {
				console.log("Github Signin error",error);
				return false;
			}
		},
	},

	providers: [
		CredentialsProvider({
			name: "Playlister",

			credentials: {
				email: { label: "email", type: "text", placeholder: "Enter email" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				connectDB();
				const user = await User.findOne({ email: credentials?.email });
				if (user) {
					// Any object returned will be saved in `user` property of the JWT
					return user;
				} else {
					// If you return null then an error will be displayed advising the user to check their details.
					return null;

					// You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
				}
			},
		}),

		GitHubProvider({
			clientId: process.env.GITHUB_ID!,
			clientSecret: process.env.GITHUB_SECRET!,
		}),
	],
};
