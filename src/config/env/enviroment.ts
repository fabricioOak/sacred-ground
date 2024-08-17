import dotenv from "dotenv";
import path from "path";

dotenv.config({
	path: path.resolve(
		__dirname,
		"..",
		"..",
		"..",
		`.env.${process.env.NODE_ENV}`
	),
});

console.log({ NODE_ENV: process.env.NODE_ENV });

// APP Configurations
const app = {
	name: process.env.npm_package_name,
	description: process.env.npm_package_description,
	version: process.env.npm_package_version,
};

// Server Configurations
const server = {
	port: process.env.PORT || 3000,
	authority: process.env.AUTHORITY || "localhost",
};

export { app, server };
