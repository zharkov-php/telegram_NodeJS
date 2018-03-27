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

    const MyHtml = `
<strong>Hello, ${msg.from.first_name}</strong>
<strong>Твое имя ${msg.from.last_name}</strong>
<strong>Твой ID  ${msg.from.id}</strong>
<pre>${debug(msg)}</pre>
`
    bot.sendMessage(msg.chat.id, MyHtml, {
        parse_mode: 'HTML'
    })
})







