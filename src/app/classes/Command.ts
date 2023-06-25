import type {
  ChatInputApplicationCommandData,
  ChatInputCommandInteraction,
} from "discord.js";

export type InteractionType = ChatInputCommandInteraction;

export abstract class Command {
  constructor(public data: ChatInputApplicationCommandData) {}
  abstract execute(interaction: InteractionType): unknown;
}
