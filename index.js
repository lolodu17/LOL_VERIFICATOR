const Discord = require('discord.js')
const bot = new Discord.Client()
const client = new Discord.Client()

bot.on("ready", function () {
  prefix = "!"
  bot.user.setUsername('LOL VERIFICATOR™').catch(console.error)
.then(user => console.log(`j'ai choisis mon avatar`))
})

bot.on('guildMemberAdd', member => {
      member.createDM().then(channel => {
         let rol = member.guild.roles.find("name", "...")
          member.addRole(rol)
        channel.send("Bourjour, merci de bien répondre __correctement__ au questionnaire. \n Pour débuter le questionnaire faite !questionnaire")
        if(member.content.startsWith('!questionnaire')){
          channel.send("Bourjour, merci de bien répondre __correctement__ au questionnaire. \n Pour débuter le questionnaire faite !questionnaire")
        }else{
          channel.send("tant pis !")
}
        
      }).catch(console.error)
    })



bot.login(process.env.TOKEN)
