import { BaseInteraction } from "discord.js";
import Event from "@/app/classes/Event";

export class Main extends Event {
  constructor() {
    super({
      name: "interactionCreate",
      once: false,
    });
  }

  async execute(interaction: BaseInteraction) {
    return console.log(new Date(interaction.createdTimestamp).toLocaleString());
  }
}
