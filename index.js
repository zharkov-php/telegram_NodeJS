
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


 bot.onText(/\/pay/, msg => {

     const chatId = msg.chat.id

     
     bot.sendInvoice(
         chatId,
         'Audi A4',
         'Best car ever in telegram bot',
         'payload',
         '381764678:TEST:5094',
         'SOME_RANDOM_STRING_KEY',
         'RUB',
         [
             {
                 label: 'audi_a4',
                 amount: 30000
             }
         ],
         {
             photo_url: 'https://a.d-cd.net/566858as-480.jpg',
             need_name: true,
             is_flexible: true
         }
     )

 })









