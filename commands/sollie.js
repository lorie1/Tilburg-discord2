const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var serverEmbed = new discord.MessageEmbed()
            .setTitle("Sollicitaties")
            .setDescription("Politie: Gesloten\n\nBrandweer: Open\n\nAmbulance: Open\n\nnormaal staff: Gesloten\n\nDeveloper: Gesloten\n\n\n**_Alles is gesloten! behalven brandweer_**")
            .setColor("#0b03fc")
            .setTimestamp();

        return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "sollie"
}