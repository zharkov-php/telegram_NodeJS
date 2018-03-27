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

//Выводит debug
     bot.onText(/\/contact1/, msg => {
    const {id} = msg.chat
    bot.sendMessage(id, debug(msg))
})

//выводит текст, который ввведет пользователе, после кнопки
bot.onText(/\/contact1 (.+)/, (msg, [source, match]) => {
    const {id} = msg.chat
    bot.sendMessage(id, debug(match))
})

//выводит в программе что смс отправленно
bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'Сообщение отправленно')
})




