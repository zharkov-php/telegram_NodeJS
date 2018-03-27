
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


// вывод видео с хостинга
 bot.onText(/\/v1/, msg => {
     const chatId = msg.chat.id

     bot.sendMessage(chatId, 'Sending video...')
     bot.sendVideo(chatId, 'http://techslides.com/demos/sample-videos/small.mp4')
 })
     // вывод видео с локального диска
 bot.onText(/\/v2/, msg => {
     const chatId = msg.chat.id
     bot.sendMessage(chatId, 'Sending video...')
     bot.sendVideo(chatId, './small.mp4')
 })
 // вывод видео с локального диска
 bot.onText(/\/v3/, msg => {
     const chatId = msg.chat.id
     bot.sendMessage(chatId, 'Sending video...')

     fs.readFile(__dirname + '/small.mp4', (err, video) => {
         bot.sendVideoNote(chatId, video)
     })

 })








