import dotenv from "dotenv";
dotenv.config();

const config = {
	server: {
		PORT: process.env.PORT || 5000,
		NODE_ENV: process.env.NODE_ENV || "development",
	},
	database: {
		MONGO_URI:
			process.env.MONGO_URI || "mongodb://localhost:27017/rz-panel",
	},
	client: {
		URL: process.env.CLIENT_URL || "http://localhost:3000",
	},
	jwt: {
		ACCESS_TOKEN_SECRET:
			process.env.ACCESS_TOKEN_SECRET || "access_token_secret",
		REFRESH_TOKEN_SECRET:
			process.env.REFRESH_TOKEN_SECRET || "refresh_token_secret",
	},
};
export default config;
