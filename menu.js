export const showMenu = (bot, chatId) => {
    bot.telegram.sendMessage(chatId, "Ты все же выбрал красную таблетку", {
        reply_markup: {
            keyboard: [
            [
                {
                    text: "это менюха бота, выбирай нижние пункты меню",
                },
            ],
            ["анекдот с kvaka.ucoz.ru"],
            ["Отключить бота"],
        ],
        },
    });
};

export const closeMenu = (bot, chatId) => { 
    bot.telegram.sendMessage(chatId, "Mr.Anderson будет за тобой приглядывать", {
        reply_markup: {
            remove_keyboard: true
        }

    })
};