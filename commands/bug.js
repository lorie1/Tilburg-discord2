const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const channel = message.guild.channels.cache.find(ch => ch.name === "bug");
    if(!channel) return message.reply("Kannaal niet gevonden.");

    var argsBericht = args.join(" ");
    if(!argsBericht) return message.reply("Gelieven een bug mee te geven!");

    var embed = new discord.MessageEmbed()
        .setDescription(argsBericht)
        .setColor("#ffcc00")
        .setAuthor(`${message.author.tag}`)
        .setFooter(``)
        


    channel.send(embed).then(async (msg) => {

       await msg.react("✔");
       await msg.react("❌");
       message.delete();
        
    });     


    message.channel.send(`Uw suggestie is verzonden in het suggestie kannaal`)


}

module.exports.help = {
    name: "bug",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}