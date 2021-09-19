const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var serverEmbed = new discord.MessageEmbed()
            .setTitle("**TOTAALE MEMBERS:**")
            .addField(message.guild.memberCount)
            .setTimestamp();

        return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "leden"
}

