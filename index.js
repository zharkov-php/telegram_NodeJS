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

 // bot.onText(/\/audio/, msg => {
 //
 //   bot.sendAudio(msg.chat.id, './wind_of_change.mp3')
 //
 // })

 bot.onText(/\/audio2/, msg => {

     bot.sendMessage(msg.chat.id, 'Start audio uploading...')

     fs.readFile(__dirname + '/wind_of_change.mp3', (err, data) => {
         bot.sendAudio(msg.chat.id, data).then(() => {
             bot.sendMessage(msg.chat.id, 'Uploading finish')
         })
     })
 })








