import fastify, { FastifyInstance } from "fastify";

class FastifyApp {
	public app: FastifyInstance;

	constructor() {
		this.app = fastify();
	}
}

export default new FastifyApp().app;
