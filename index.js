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



 // https://developers.google.com/speed/webp/gallery1
 bot.onText(/\/s1/, msg => {
     bot.sendSticker(msg.chat.id, './sticker.webp')
 })

 bot.onText(/\/s2/, msg => {
    fs.readFile(__dirname + '/sticker.webp', (err, sticker) => {
        bot.sendSticker(msg.chat.id, sticker)
    })
 })








