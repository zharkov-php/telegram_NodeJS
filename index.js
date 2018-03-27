const TelegramBot = require('node-telegram-bot-api')

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

console.log('Сервер запущен')//вывод в консоле сообщения

bot.on('message', (msg) => {
console.log(msg)
    bot.sendMessage(msg.chat.id, 'Здравствуйте!!!, ' + msg.from.first_name +  ' меня зовут Алешка, я Ваш персональный менеджер!!! ')
    bot.sendMessage(msg.chat.id, 'Чем могу Вам помочь?   '  + msg.from.first_name + '  выберите в меню вопрос по разделам ')
})




