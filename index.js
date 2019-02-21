const Discord = require('discord.js')
const bot = new Discord.Client()
const client = new Discord.Client()
  
bot.on("ready", function () {
  prefix = "!"
  bot.user.setUsername('LoL VERIFICATOR').catch(console.error)
.then(user => console.log(`j'ai choisis mon avatar`))
})

bot.on('message', message => {
  var name = ("")
    if(message.content.startsWith("!Prêt") && message.channel.name == "vérification"){
        let test = message.content.split(" ");
        let testinfo = test.slice(1);
        let pseudo = testinfo.join(" ").slice(0)
        message.member.send(`Quelle est votre nom dans League of Leagend ?`)
    }
      if(message.content.startsWith(pseudo)){
        name = (`${pseudo}`)
      
 var joueur_embed = new Discord.RichEmbed()
        .setColor("#00CB0E")
        .setTitle(`Nouveau membre : ${message.author.username}`)
        .addField("Prénom :",`${name} .`)
        .setFooter("Bienvenue à lui !")
        message.member.send(joueur_embed)

    }})
bot.on('guildMemberAdd', member => {
      member.createDM(5000).then(channel => {
         let rol = member.guild.roles.find("name", "...")
          member.addRole(rol)
        channel.send("Bonjour et bienvenue dans LoLTeamsFR, Vous voulez rejoindre la team ?\n\nBien !\n\nAlors, tous ce que tu a à faire, c'est d'allez dans le salon vérification et d'écrire !rejoindre !")
      }).catch(console.error)
    })
bot.on('message', message => {
      const Ruby = "357912301216595971";
const octokling = "490780128234831906";
  const nm = "0";
  let espace = message.content.split(" ").slice(1).join(" ");
 if(message.content.startsWith('!rejoindre') && message.channel.name == "vérification"){
   message.delete(message.author)
  message.member.sendMessage("Avant de rejoindre la team tu doit répondre à un questionnaire te consérnant (les information ne sera distribuée à d'autre membre.).\n\n")
  message.member.sendMessage("\n\n\nFaite la commande __!prêt__ __dans vérification__ pour remplir le questionnaire.\n\nTu as __1 minute__ pour de répondre !\n\n")
  const filter = message => message.content.startsWith('!prêt')
message.channel.awaitMessages(filter, {max: 1, time: 60000, errors: ['time'] })
     
   .then(collected => { 

  message.delete(message.author)
let verification = message.guild.channels.find(`name`, "vérification");
if(!verification) return message.member.send("Je n'ai trouvé pas le salon 'vérification'");
  let rol = message.guild.roles.find("name", "...")
verification.send(`@${rol.name}, ${message.author} va remplir le questionnaire !`)
  message.member.send("Quelle âge avaient vous ?\n\nPourquoi avez vous rejoint le serveur ?\n\nQuelle est votre personnage favoris (celui que vous utiliser tout le temps) dans le jeu ?\n\nQuelle niveau êtes vous dans le jeu ?\n\nVous seriez interresser si on organise des événement sur ce serveur consénant le jeu ?\n\nVous avez un Ordinateur faible ; puissant ; gameur ?\n\nVous devez envoyer le questionnaire dans vérification et faire \n\nVous avez 30 minute pour répondre !")

})
   
   
.catch(collected => {
  message.member.sendMessage("\n\nVous avez pas écrit à temps !\n\nVeuillez recommancer !")
})
  
}})

bot.login(process.env.TOKEN)
