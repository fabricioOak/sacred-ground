import { FastifyInstance } from "fastify";

import FastifyApp from "./fastify";
import * as env from "../env/enviroment";

class App {
	public app: FastifyInstance;

	constructor() {
		this.app = FastifyApp;
	}

	public starts() {
		const server = this.app.listen(
			{ port: 3000, host: "0.0.0.0" },
			(err, address) => {
				console.log("---");
				console.log("Package name:      " + env.app.name);
				console.log("Environment:       " + process.env.NODE_ENV);
				console.log("App version:       " + env.app.version);
				console.log("Running on port:   " + env.server.port);
				console.log("Authority:         " + env.server.authority);
				console.log("---");

				if (err) {
					console.error(err);
					process.exit(1);
				}

				console.log("Server is running on: " + address);
			}
		);

		return { server };
	}

	public async stop() {
		await this.app.close();
	}

	public async restart() {
		await this.stop();
		this.starts();
	}
}

export { App };
