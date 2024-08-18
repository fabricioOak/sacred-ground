import fastify, { FastifyInstance } from "fastify";
import { initRoutes } from "config/lib/routes";

class FastifyApp {
	public app: FastifyInstance;

	constructor() {
		this.app = fastify();
	}

	async init() {
		await initRoutes(this.app);
	}
}

const fastifyApp = new FastifyApp();

fastifyApp.init();

export default fastifyApp.app;
