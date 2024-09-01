from telegram import Update, KeyboardButton, WebAppInfo, ReplyKeyboardMarkup
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

# Ваш токен от BotFather
TOKEN = '7214709378:AAHMe474H9qJ1nxDRXAied2U9tjbNJ07yEc'

# Функция для обработки команды /start
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    # Создаем кнопку с веб-приложением
    button = KeyboardButton(text="Играть в Coin Clicker", web_app=WebAppInfo(url="https://github.com/Weulon/dragons.git"))
    keyboard = [[button]]  # Клавиатура с одной кнопкой
    reply_markup = ReplyKeyboardMarkup(keyboard)  # Создаем клавиатуру

    # Отправляем сообщение с клавиатурой пользователю
    await update.message.reply_text("Нажмите кнопку, чтобы сыграть в Coin Clicker:", reply_markup=reply_markup)

# Основная функция запуска бота
if __name__ == '__main__':
    # Создаем приложение для бота
    app = ApplicationBuilder().token(TOKEN).build()

    # Добавляем обработчик команды /start
    app.add_handler(CommandHandler("start", start))

    # Запускаем бота в режиме polling
    app.run_polling()
