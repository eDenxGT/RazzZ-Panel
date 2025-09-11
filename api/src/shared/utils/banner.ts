import chalk from "chalk";

interface BannerData {
	serverPort: number | string;
	env: string;
	dbConnected: boolean;
}
/**
 * Prints a stylized banner to the console with server information.
 * @param {BannerData} param0 - An object containing serverPort, env, and dbConnected status.
 */
export function printBanner({ serverPort, env, dbConnected }: BannerData) {
	const statusServer = chalk.greenBright.bold("✔️  Running");
	const statusEnv: { log: string; spaceCount: number } = {
		log:
			env === "development"
				? chalk.yellowBright.bold("🛠  Development")
				: env === "production"
				? chalk.greenBright.bold("🚀 Production")
				: chalk.cyanBright.bold(env),
		spaceCount: env === "production" ? 15 : 14,
	};

	const statusDB: { log: string; spaceCount: number } = {
		log: dbConnected
			? chalk.magentaBright.bold("✔️  Connected")
			: chalk.redBright.bold("❌ Failed"),
		spaceCount: dbConnected ? 20 : 23,
	};

	const now = new Date().toLocaleString();

	console.log(
		chalk.yellowBright.bold(
			"\n\t==============================================="
		)
	);
	console.log(
		chalk.yellowBright.bold("\t|") +
			chalk.cyanBright.bold(
				"          🚀 NestBot API Server          "
			) +
			chalk.yellowBright.bold("|")
	);
	console.log(
		chalk.yellowBright.bold(
			"\t==============================================="
		)
	);

	console.log(
		chalk.yellowBright.bold("\t|") +
			` 🌐 Server: ${statusServer} on Port: ` +
			chalk.cyanBright.bold(`${serverPort}`) +
			chalk.yellowBright.bold(" ".repeat(9)) +
			chalk.yellowBright.bold("|")
	);

	console.log(
		chalk.yellowBright.bold("\t|") +
			` ⚙️  Environment: ${statusEnv.log}` +
			chalk.yellowBright.bold(" ".repeat(statusEnv.spaceCount)) +
			chalk.yellowBright.bold("|")
	);

	console.log(
		chalk.yellowBright.bold("\t|") +
			` 🗄️  MongoDB: ${statusDB.log}` +
			chalk.yellowBright.bold(" ".repeat(statusDB.spaceCount)) +
			chalk.yellowBright.bold("|")
	);

	console.log(
		chalk.yellowBright.bold("\t|") +
			` 📅 Started At: ${chalk.whiteBright.bold(now)}` +
			chalk.yellowBright.bold(" ".repeat(9)) +
			chalk.yellowBright.bold("|")
	);

	console.log(
		chalk.yellowBright.bold(
			"\t===============================================\n"
		)
	);
}
