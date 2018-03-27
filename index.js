

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


const inline_keyboard = [
    [
        {
            text: 'Forward',
            callback_data: 'forward'
        },
        {
            text: 'Ответ',
            callback_data: 'reply'
        }
    ],
    [
        {
            text: 'Edit',
            callback_data: 'edit'
        },
        {
            text: 'Delete',
            callback_data: 'delete'
        }
    ]
]

bot.on('callback_query', query => {

    const { chat, message_id, text } = query.message

    switch (query.data) {
        case 'forward':
            // куда, откуда, что
            bot.forwardMessage(chat.id, chat.id, message_id)
            break
        case  'reply':
            bot.sendMessage(chat.id, `Отвечаю на сообщение текстом...ла-ла-ала`, {
                reply_to_message_id: message_id
            })
            break
       
    }

    bot.answerCallbackQuery({
        callback_query_id: query.id
    })
})

bot.onText(/\/start/, (msg, [source, match]) => {

    const chatId = msg.chat.id

    bot.sendMessage(chatId, 'Keyboard', {
        reply_markup: {
            inline_keyboard
        }
    })

})





