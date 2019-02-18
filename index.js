const Discord = require('discord.js')
const bot = new Discord.Client()
const client = new Discord.Client()

bot.on("ready", function () {
  prefix = "!"
  bot.user.setUsername('LoL VERIFICATOR').catch(console.error)
.then(user => console.log(`j'ai choisis mon avatar`))
})

bot.on('guildMemberAdd', member => {
      member.createDM(5000).then(channel => {
         let rol = member.guild.roles.find("name", "...")
          member.addRole(rol)
        channel.send("Bonjour et bienvenue dans LoLTeamsFR, Vous voulez rejoindre la team ?\n\nBien !\n\nAlors, tous ce que tu a à faire, c'est d'allez dans le salon vérification et d'écrire !rejoindre !")
      }).catch(console.error)
    })
bot.on('message', message => {
 if(message.content.startsWith('!rejoindre') && message.channel.name == "vérification"){
   message.delete();
  message.member.sendMessage("Avant de rejoindre la team tu doit répondre à un questionnaire te consérnant (les information ne sera distribuée à d'autre membre.)")
  message.member.sendMessage("\n\nFait la commande !ready pour remplir le questionnaire.\n\nTu as 30 seconde pour de répondre !")
  const filter = message => message.content.startsWith('!ready')
message.member.awaitMessages(filter, {max: 1, time: 30000, errors: ['time'] })
   .then(collected => console.log(collected.size))
  .catch(collected => {
         if(!message.content.startsWith !== "!ready"){
  message.member.sendMessage("\n\nVous avez pas écrit à temps !\n\nVeuillez recommancer !")
         }else{
         message.member.sendMessage("C'est parti, je vous envoie sa ...")
         }})
  
  
}})
bot.on('message', message => {
  if(message.content.startsWith('!test')){
  const filter = message => message.content.startsWith('!vote');
// Errors: ['time'] treats ending because of the time limit as an error
message.channel.awaitMessages(filter, { max: 4, time: 60000, errors: ['time'] })
  message.channel.awaitMessages(filter, options = {})
  .then(collected => console.log(collected.size))
  .catch(collected => console.log(`After a minute, only ${collected.size} out of 4 voted.`));
}})

bot.login(process.env.TOKEN)
