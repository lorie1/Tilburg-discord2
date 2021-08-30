const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const channel = message.guild.channels.cache.find(ch => ch.name === "bug");
    if(!channel) return message.reply("Kannaal niet gevonden.");

    var argsBericht = args.join(" ");
    if(!argsBericht) return message.reply("Gelieven een bug mee te geven!");

    var embed = new discord.MessageEmbed()
        .setDescription(argsBericht)
        .setColor("#0b03fc")
        .setAuthor(`${message.author.tag}`)
        .setTimestamp();
        


    channel.send(embed).then(async (msg) => {

       await msg.react("✔");
       await msg.react("❌");
       message.delete();
        
    });     


 var serverEmbed = new discord.MessageEmbed()
    .setDescription("Uw bug is verstuurd in #bug")
    .setColor("#0b03fc")
    .setAuthor(`${author.tag}`)
    .setTimestamp();

return message.channel.send(serverEmbed);


}

module.exports.help = {
    name: "bug",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}