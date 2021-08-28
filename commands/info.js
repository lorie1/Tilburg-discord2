const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
            .setTitle('Informatie')
            .setDescription(`Tilburg V1 is een RP sevrer moemtneel is de game nog niet uit, wij zijn er wel druk mee bezig.\nHet is nog niet bekend wanneer de game uit zal komen!`)
            .setColor("#00f518")
            .addField("Bot naam", client.user.username);

            message.channel.send("Alle infotmatie staat in je privé berichten! :mailbox_with_mail:")
            return message.author.send(botEmbed);
}      


    




module.exports.help = {
    name: "info"
}


