const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
            .setTitle('Informatie')
            .setDescription(`Tilburg stad V1 is een RP server de game is al uit. Doe !game in <#868160712793522179>.\n\nLet wel op de game is nog in beta!`)
            .setColor("#0b03fc")
            .setTimestamp();

            message.channel.send("Alle infotmatie staat in je privé berichten! :mailbox_with_mail:") 
            return message.author.send(botEmbed);
}      


    




module.exports.help = {
    name: "info"
}


