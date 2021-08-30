const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var serverEmbed = new discord.MessageEmbed()
            .setTitle("Sollicitaties")
            .setDescription("Politie: gesloten\n\nBrandweer: gesloten\n\nAmbulance: gesloten\n\nnormaal staff: gesloten\n\nDeveloper: gesloten\n\n\n**_Alle sollicitatsies zijn gesloten_**")
            .setColor("#0b03fc")
            .setTimestamp();

        return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "sollie"
}