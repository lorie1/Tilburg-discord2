const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var serverEmbed = new discord.MessageEmbed()
            .setTitle("Informatie game ")
            .setDescription("Onze game is momenteel: open\n\nDe game is in vase: BETA (Test)\n\nDe laatste update is: Kunt u zien in <#881295923752366163>\n\nGame link: https://www.roblox.com/games/6763236398/Gemeenten-Tilburg-V1-BETA")
            .setColor("#0b03fc")
            .setTimestamp();

        return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "game"
}