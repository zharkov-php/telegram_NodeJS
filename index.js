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
    setTimeout(() => {
        bot.sendMessage(msg.chat.id, `http://www.aerovis.aero/ru/about-us-ru/`, {
            disable_web_page_preview: true
        })
    }, 4000)

})







