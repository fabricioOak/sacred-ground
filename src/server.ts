import { App } from "./config/lib/app";

const { server } = new App().starts();

export { server };
