const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
            .setTitle('Informatie')
            .setDescription(`Tilburg surveillance dienst is een server om surveillance te doen, dit werkt zo:\nMocht er een surveillance komen word dat eerst gemeld in het surveillance kanaal, als je mee wild doen moet u de brievings call joinen anders kunt u niet mee doen!\n\n **_verdere informatie te vinden in uitleg._**`)
            .setColor("#00f518")
            .addField("Bot naam", client.user.username);

            message.channel.send("Alle commands staan in je privé berichten! :mailbox_with_mail:")
            return message.author.send(botEmbed);
}      


    




module.exports.help = {
    name: "info"
}


