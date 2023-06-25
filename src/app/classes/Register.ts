import { Client } from "discord.js";
import { globSync } from "glob";

export default class Register {
  constructor(public reference: Client) {
    this, reference.login(process.env.TOKEN);

    this.setCommands();
    this.setEvents();
  }

  setCommands() {
    const Commands = globSync("src/commands/**/*.ts").map(
      (glob) => new (require(`../../../${glob}`).Main)()
    );

    this.reference.on("ready", () => {
      this.reference.application?.commands.set(
        Commands.map((command) => command.data)
      );
    });

    this.reference.on("interactionCreate", (interaction) => {
      if (interaction.isChatInputCommand()) {
        const Command = Commands.find(
          (command) => command.data.name === interaction.commandName
        );

        if (Command) Command.execute(interaction);
        else {
          interaction.reply({
            content: "Desculpe, este é um comando inválido.",
          });
        }
      }
    });
  }

  setEvents() {
    const Events = globSync("src/events/*.ts").map(
      (glob) => new (require(`../../../${glob}`).Main)()
    );

    for (const Event of Events) {
      this.reference[Event.data.once ? "once" : "on"](
        Event.data.name,
        (...params) => Event.execute(...params)
      );
    }
  }
}
