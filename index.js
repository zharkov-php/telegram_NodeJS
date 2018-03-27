
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

 bot.onText(/\/doc1/, msg => {

     bot.sendDocument(msg.chat.id, './wfm.xlsx')

 })


 bot.onText(/\/doc2/, msg => {

     bot.sendMessage(msg.chat.id, 'Upload start...')

     fs.readFile(__dirname + '/wfm.zip', (err, file) => {

         bot.sendDocument(msg.chat.id, file, {
             caption: 'Additional text'
         }).then(() => {
             bot.sendMessage(msg.chat.id, 'Upload finish')
         })

     })

 })








