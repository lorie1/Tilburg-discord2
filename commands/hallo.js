const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry jij kan dit niet");


    return message.channel.send("Tilburg bot doet het nog!")

}

module.exports.help = {
    name: "test",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}