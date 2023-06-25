import { Command, InteractionType } from "@/app/classes/Command";

export class Main extends Command {
  constructor() {
    super({
      description: "See my ping.",
      name: "ping",
    });
  }

  async execute(interaction: InteractionType) {
    return interaction.reply(`Latência: ${interaction.client.ws.ping}.`);
  }
}
