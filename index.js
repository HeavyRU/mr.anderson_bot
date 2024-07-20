import { Telegraf } from "telegraf";
import { config } from "./config.js";
import { getJoke } from "./joke.js";
import { showMenu, closeMenu } from "./menu.js";

const bot = new Telegraf(config.telegaToken, {});

bot.start((ctx) => ctx.reply("Привет я бот Mr.Anderson, напечатай или кликни по команде /menu для дальнейшей работы"))

bot.on("message", async ctx => {
    const chatId = ctx.chat.id;
    if (ctx.update.message.text == "/menu") {
        showMenu(bot, chatId);
    } else if (ctx.update.message.text == "анекдот с kvaka.ucoz.ru") {
       let content = await getJoke()
       ctx.reply(content)
    } else {
       closeMenu(bot, chatId);
    }
})
bot.launch()