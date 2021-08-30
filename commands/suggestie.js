const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const channel = message.guild.channels.cache.find(ch => ch.name === "suggestie");
    if(!channel) return message.reply("Kannaal niet gevonden.");

    var argsBericht = args.join(" ");
    if(!argsBericht) return message.reply("Gelieven een suggestie mee te geven!");

    var embed = new discord.MessageEmbed()
        .setDescription(argsBericht)
        .setColor("##0b03fc")
        .setAuthor(`${message.author.tag}`)
        .setTimestamp();
        


    channel.send(embed).then(async (msg) => {

       await msg.react("👍");
       await msg.react("👎");
       message.delete();
        
    });     


    message.channel.send(`Uw suggestie is verzonden in het suggestie kannaal`)


}

module.exports.help = {
    name: "suggestie",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}