import { FastifyInstance } from "fastify";

import FastifyApp from "./fastify";
import * as env from "../env/enviroment";

class App {
	public app: FastifyInstance;

	constructor() {
		this.app = FastifyApp;
	}

	public starts() {
		const server = this.app.listen(env.server.port, () => {
			console.log("---");
			console.log("Package name:              " + env.app.name);
			console.log("Environment:       " + process.env.NODE_ENV);
			console.log("App version:       " + env.app.version);
			console.log("Running on port:   " + env.server.port);
			console.log("Authority:         " + env.server.authority);
			console.log("---");
		});

		return { server };
	}
}

export { App };
