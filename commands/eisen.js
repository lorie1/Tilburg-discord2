const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var serverEmbed = new discord.MessageEmbed()
            .setTitle("Sollicitatie eisen!")
            .setDescription("boven de 50 leden: Geen tag\n\nOnder de 50 leden: here tag\n\nOnder de 30 leden: everyone tag\n\nOnder de 20 leden: Doen wij geen partners mee!\n\nGeen NSFW")
            .setColor("#0b03fc")
            .setTimestamp();

        return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "eisen"
}