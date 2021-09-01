const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
            .setTitle('Informatie')
            .setDescription(`Tilburg stad V1 is een RP server momenteel is de game nog niet uit, wij zijn er wel druk mee bezig.\n\nHet is nog niet bekend wanneer de game uit zal komen!`)
            .setColor("#0b03fc")
            .setTimestamp();

            message.channel.send("Alle infotmatie staat in je privé berichten! :mailbox_with_mail:") 
            return message.author.send(botEmbed);
}      


    




module.exports.help = {
    name: "info"
}


