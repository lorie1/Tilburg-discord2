const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");

    
    const channel = message.guild.channels.cache.find(ch => ch.name === "poll");
    if(!channel) return message.reply("Kannaal niet gevonden.");

    var argsBericht = args.join(" ");
    if(!argsBericht) return message.reply("Gelieven een poll mee te geven!");

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
    .setDescription("Uw poll is verstuurd ")
    .setColor("#0b03fc")
    .setAuthor(`${message.author.username}`)
    .setTimestamp();

return message.channel.send(serverEmbed);


}

module.exports.help = {
    name: "poll",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}