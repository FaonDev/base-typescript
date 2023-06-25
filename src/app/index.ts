import Register from "./classes/Register";
import { Client } from "discord.js";

export const Application = new Client({
  intents: [],
});

Application.login(process.env.TOKEN);

new Register(Application);
