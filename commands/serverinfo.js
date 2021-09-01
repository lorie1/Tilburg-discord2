const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var serverEmbed = new discord.MessageEmbed()
            .setDescription("Hoi wij zijn Tilburg stad V1")
            .setColor("#0b03fc")
            .addField("Bot naam", client.user.username)
            .addField("Je bent deze server gejoind op", message.member.joinedAt)
            .addField("Totaal memebers", message.guild.memberCount)
            .setTimestamp();

        return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "serverinfo"
}