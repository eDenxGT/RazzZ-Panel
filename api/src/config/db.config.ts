import mongoose from "mongoose";
import config from "./env.config";
import chalk from "chalk";

export const connectDB = async (): Promise<boolean> => {
	try {
		await mongoose.connect(config.database.MONGO_URI);

		mongoose.connection.on("disconnected", () => {
			console.log("MongoDB disconnected");
		});
		return true;
	} catch (error) {
		// console.error("Failed to connect to MongoDB:", error);
		return false;
	}
};
