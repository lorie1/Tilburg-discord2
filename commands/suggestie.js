const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const channel = message.guild.channels.cache.find(ch => ch.name === "suggestie2");
    if(!channel) return message.reply("Kannaal niet gevonden.");

    var argsBericht = args.join(" ");
    if(!channel) return message.reply("Gelieven een suggestie mee te geven!");

    var embed = new discord.MessageEmbed()
        .setTitle(`Suggestie ${message.author.tag}`)
        .setDescription(argsBericht)
        .setColor("#ffcc00")
        .setFooter(time)


    channel.send(embed).then(async (msg) => {

       await msg.react("👍");
       await msg.react("👎");
       message.delete();
    }).cache(err => {
        console.log(err);
    });     





}

module.exports.help = {
    name: "suggestie",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}