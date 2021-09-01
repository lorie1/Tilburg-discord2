const discord = require("discord.js");

module.exports.run = async (client, message, args) => {


    
    const channel = message.guild.channels.cache.find(ch => ch.name === "suggestie");
    if(!channel) return message.reply("Kannaal niet gevonden.");

    var argsBericht = args.join(" ");
    if(!argsBericht) return message.reply("Gelieven een suggestie mee te geven!");

    var embed = new discord.MessageEmbed()
        .setDescription(argsBericht)
        .setColor("#0b03fc")
        .setAuthor(`${message.author.tag}`)
        .setFooter("Bot naam", client.user.username)
        .setTimestamp();
        


    channel.send(embed).then(async (msg) => {

       await msg.react("👍");
       await msg.react("👎");
       message.delete();
        
    });     


    


    var serverEmbed = new discord.MessageEmbed()
.setDescription("Uw suggestie is verstuurd in het #suggestie kanaal")
.setColor("#0b03fc")
.setAuthor(`${message.author.username}`)
.setTimestamp();

return message.channel.send(serverEmbed);


}




module.exports.help = {
    name: "suggestie",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}