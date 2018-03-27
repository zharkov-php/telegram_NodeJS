const TelegramBot = require('node-telegram-bot-api')
const debug = require('./helpers')
const TOKEN = '595808254:AAHjcdRI0-wohBLK9_xUf7PV2cbWG_Kse_w'
const bot = new TelegramBot(TOKEN, {
    polling: {
        interval: 300,//интервал загрукзки между клинтом и сервером
        autoStart: true,//если бот незапущен, он запоминает команды и потом после запуска ответит
        params: {
            timeout: 10//между запросами таймаут
        }
    }
})


bot.on('message', msg => {
    const chatId = msg.chat.id

    bot.sendMessage(chatId, 'Моя Инлайн клавиатура-меню', {
        reply_markup: {
            inline_keyboard: [
               [
                   {
                       text: 'Google',//Кнопка гугл ссылка
                       url: 'https://www.google.com/'
                   }
               ],
                [
                    {
                        text: 'Second',// первая кнопка
                        callback_data: '1'
                    },
                    {
                        text: 'First',//Вторая кнопка
                        callback_data: 'First'
                    }
                ]
            ]
        }
    })



})

bot.on('callback_query', query => { //вывод результата
    bot.sendMessage(query.message.chat.id, debug(query))//вывод распечаткой debug

    bot.answerCallbackQuery(query.id, `${query.data}`)//Вывод алертом
})







