 const TelegramBot = require('node-telegram-bot-api')
 const debug = require('./helpers')
 const TOKEN = '595808254:AAHjcdRI0-wohBLK9_xUf7PV2cbWG_Kse_w'
 const fs = require('fs')
 const bot = new TelegramBot(TOKEN, {
    polling: {
        interval: 300,//интервал загрукзки между клинтом и сервером
        autoStart: true,//если бот незапущен, он запоминает команды и потом после запуска ответит
        params: {
            timeout: 10//между запросами таймаут
        }
    }
})


 bot.onText(/\/pic/, msg => {
    //выводим фото
     bot.sendPhoto(msg.chat.id, fs.readFileSync(__dirname + '/pictehno-logo.png'))

 })

 bot.onText(/\/pic2/, msg => {
    //выводим фото с описанием
     bot.sendPhoto(msg.chat.id, './pictehno-logo.png', {
         caption: 'This is cat photo'
     })

 })









