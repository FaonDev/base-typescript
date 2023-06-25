import Event from "@/app/classes/Event";

export class Main extends Event {
  constructor() {
    super({
      name: "ready",
      once: true,
    });
  }

  async execute() {
    console.clear();

    return console.log(`
    ${"Ready!".inverse}
    `);
  }
}
