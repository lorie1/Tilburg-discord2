const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var serverEmbed = new discord.MessageEmbed()
            .setTitle("Sollicitaties")
            .setDescription("Politie: open\n\nBrandweer: open\n\nAmbulance: open\n\nnormaal staff: open\n\nDeveloper: gesloten\n\n\n**_alleen developer is gesloten_**")
            .setColor("#0b03fc")
            .setFooter("Bot naam", client.user.username)
            .setTimestamp();

        return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "sollie"
}