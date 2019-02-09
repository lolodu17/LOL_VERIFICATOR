const Discord = require('discord.js')
const bot = new Discord.Client()
const client = new Discord.Client()

bot.on("ready", function () {
  prefix = "!"
  bot.user.setUsername('LOL VERIFICATOR™').catch(console.error)
.then(user => console.log(`j'ai choisis mon avatar`))
})

bot.login(process.env.TOKEN)
