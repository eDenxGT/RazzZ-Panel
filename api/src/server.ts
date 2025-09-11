// import "reflect-metadata";
// import "./container/resolver";

import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.config";
import { printBanner } from "./shared/utils/banner";
import config from "./config/env.config";
import chalk from "chalk";
import morgan from "morgan";
import expressRateLimit from "express-rate-limit";
import authRoute from "./routes/auth.route";
import privateRoute from "./routes/private.route";

const app = express();

(async () => {
	const dbConnected = await connectDB();

	/**
	 * Rate limiting (to prevent abuse)
	 * (below configuration limits are set to 100 requests per 15 minutes)
	 */
	app.use(
		expressRateLimit({
			windowMs: 15 * 60 * 1000,
			max: 100,
		})
	);

	/**
	 * CORS Policy setting
	 * (to allow requests from different origins)
	 */
	app.use(
		cors({
			origin: config.client.URL,
			credentials: true,
			methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
		})
	);

	app.use(express.json()); // Parse JSON bodies
	app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies (raw html form submissions)

	app.use(morgan("dev"));

	// Define API routes
	app.use("api/v1/auth", authRoute);
	app.use("api/v1/pvt", privateRoute);

	/**
	 * Error handling middleware.
	 * (to handle unknown routes)
	 */
	app.use((req, res, next) => {
		res.status(404).json({ message: "Route not found" });
	});

	// server startup
	app.listen(config.server.PORT, (err?: Error) => {
		if (err) {
			console.error(
				chalk.redBright.bold("❌ Failed to start server:"),
				err.message
			);
			process.exit(1);
		} else {
			printBanner({
				serverPort: config.server.PORT,
				env: config.server.NODE_ENV,
				dbConnected,
			});
		}
	});
})();
