const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var serverEmbed = new discord.MessageEmbed()
            .setTitle("Sollicitaties")
            .setDescription("Politie: gesloten\n\nBrandweer: open\n\nAmbulance: open\n\nnormaal staff: open\n\n**_dit is voor leidinggevende de normale HR Sollicitaties zijn gesloten maar de Leidinggevende Sollicitaties staan open, dat ziet u hier boven._**")
            .setColor("#kleur")

        return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "sollie"
}