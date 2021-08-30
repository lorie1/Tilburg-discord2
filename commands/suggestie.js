const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const channel = message.guild.channels.cache.find(ch => ch.name === "suggestie2");
    if(!channel) return message.reply("Kannaal niet gevonden.");

    var argsBericht = args.join(" ");
    if(!channel) return message.reply("Gelieven een suggestie mee te geven!");

    var embed = new discord.MessageEmbed()
        .setDescription(argsBericht)
        .setTitle(`Suggestie ${message.author.tag}`)
        .setColor("#ffcc00");
        


    channel.send(embed).then(async (msg) => {

       await msg.react("👍");
       await msg.react("👎");
       message.delete();
        
    });     





}

module.exports.help = {
    name: "suggestie",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}