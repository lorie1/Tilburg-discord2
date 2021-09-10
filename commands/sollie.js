const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var serverEmbed = new discord.MessageEmbed()
            .setTitle("Sollicitaties")
            .setDescription("Politie: Gesloten\n\nBrandweer: Gesloten\n\nAmbulance: open\n\nnormaal staff: Gesloten\n\nDeveloper: Open\n\n\n**_Alleen ambulance en developer is open!_**")
            .setColor("#0b03fc")
            .setTimestamp();

        return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "sollie"
}