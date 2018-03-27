

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
    const chatId = msg.chat.id

    if (msg.text === 'Закрыть'){ //если Кнопка Закрыть
    bot.sendMessage(chatId, 'Закрываю клавиатуру', {
        reply_markup: {
            remove_keyboard: true
        }
    })
    }else if (msg.text === 'Ответить'){ //если Кнопка Ответить
        bot.sendMessage(chatId, 'Отвечаю Вам', {
            reply_markup: {
                force_reply: true
            }
        })
    }else {
        bot.sendMessage(chatId, 'Моя Клавиатура', {
            reply_markup: {
                keyboard: [
                    [{
                    text: 'Отправить местоположение',//Кнопка оправить местоположение
                        request_location: true
                    }],
                    ['Ответить', 'Закрыть'],//Кнопки Ответить и Закрыть, работают по условиям выше указанным
                    [{
                    text: 'Отправить контакт',//Кнопка Оправить контакт
                        request_contact: true
                    }]
                ],
                one_time_keyboard: true //ЗАКРЫВАЕМ КЛАВИАТУРУ ПОСЛЕ ВЫБОРА ЛЮБОЙ КНОПКИ
            }
        })
    }




})







