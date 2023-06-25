import Register from "./classes/Register";
import { Client } from "discord.js";

export const Application = new Client({
  intents: [],
});

new Register(Application);
