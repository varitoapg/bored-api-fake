import environment from "./loadEnvironment.js";
import debugCreator from "debug";
import chalk from "chalk";
import startServer from "./server/startServer.js";
import app from "./server/app.js";

const { port, mongoDatabaseUrl, databaseName } = environment;
const debug = debugCreator("characters:root");

try {
  await startServer(app, port);
  debug(chalk.green.bold(`Server listening on http://localhost:${port}`));
} catch (error: unknown) {
  debug(chalk.red.bold("Error starting the API: ", (error as Error).message));
}
