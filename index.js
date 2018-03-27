
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


bot.on('inline_query', query => { //вывод результата
    const results = []

    for (let i = 0; i < 10; i++) {
        results.push({
            type:'article',
            id: i.toString(),
            title:'Title' + i,
            input_message_content: {
                message_text: `Article #${i+1}`
            }
        })
    }
    bot.answerInlineQuery(query.id, results,{
        cache_time: 0
   // bot.sendMessage(query.message.chat.id, debug(query))//вывод распечаткой debug

   // bot.answerCallbackQuery(query.id, `${query.data}`)//Вывод алертом
})
})






