import { App } from "./config/lib/app";

const app = new App();

const { server } = app.starts();

export { server };
