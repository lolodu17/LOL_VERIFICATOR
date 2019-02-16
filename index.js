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
        channel.send("Bonjour et bienvenue dans LoLTeamsFR, Vous voulez rejoindre la team ?\n\nBien !\n\n Alors, tous ce que tu a à faire, c'est d'allez dans le salon vérification et d'écrire !rejoindre !")
        channel.startTyping();
      }).catch(console.error)
    })
bot.on('message', message => {
 if(message.content.startsWith('!rejoindre') && message.channel.name !== "vérification"){
  message.member.sendMessage("Avant de rejoindre la team tu doit répondre à un questionnaire te consérnant (les information ne sera distribuée à d'autre membre.")
  message.member.sendMessage("Fait la commande !ready pour remplir le questionnaire.\n\n tu as 15 seconde pour de répondre !")
    const filter = message => message.content.startsWith('!ready');
  }else{
  
  }
  
}})


bot.login(process.env.TOKEN)
