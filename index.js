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
      const Ruby = "357912301216595971";
const octokling = "490780128234831906"
  
  let espace = message.content.split(" ").slice(1);
let envoie = espace.join(" ")
 if(message.content.startsWith('!rejoindre') && message.channel.name == "vérification"){
   message.delete(message.author)
  message.member.sendMessage("Avant de rejoindre la team tu doit répondre à un questionnaire te consérnant (les information ne sera distribuée à d'autre membre.).\n\n")
  message.member.sendMessage("\n\n\nFaite la commande __!ready__ __dans vérification__ pour remplir le questionnaire.\n\nTu as __1 minute__ pour de répondre !\n\n")
  const filter = message => message.content.startsWith('!ready')
message.channel.awaitMessages(filter, {max: 1, time: 60000, errors: ['time'] })
     
   .then(collected => { 
  message.delete(message.author)
let verification = message.guild.channels.find(`name`, "vérification");
if(!verification) return message.member.send("Je n'ai trouvé pas le salon 'vérification'");
  let rol = message.guild.roles.find("name", "...")
verification.send(`@${rol.name}, ${message.author} va remplir le questionnaire !`)
})
   .catch(collected => {
  message.member.sendMessage("\n\nVous avez pas écrit à temps !\n\nVeuillez recommancer !")
})
  message.member.send("Comment vous appelez vous ?\n\nQuelle est pseudo dans le jeu ?\n\nQuelle âge avaient vous ?\n\nPourquoi avez vous rejoint le serveur ?\n\nQuelle est votre personnage favoris (celui que vous utiliser tout le temps) dans le jeu ?\n\nQuelle niveau êtes vous dans le jeu ?\n\nVous seriez interresser si on organise des événement sur ce serveur consénant le jeu ?\n\nVous avez un Ordinateur faible ; puissant ; gameur ?\n\nVous avez 30 minute pour répondre !")
  const filter = message.content.startsWith(`${envoie}`)
message.channel.awaitMessages(filter, {max: 1, time: 1800000, errors: ['time'] })
.then(collected => {
message.member.send("Merci d'avoir pris temps de nous répondre, nos modérateur vont certifier votre questionnaire !")
message.guild.member(octokling).send(`${envoie}`)
})
    .catch(collected => {
message.member.send("Vous n'avait répondue au questionnaire à temps vous devez tout recommencer !")
})
   
  

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
