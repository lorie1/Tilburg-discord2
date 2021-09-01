const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "880254056524836925";

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Jij kan dit niet doen");

    if (message.channel.parentID == categoryID) {

        var serverEmbed = new discord.MessageEmbed()
            .setTitle(`Ticket is geclaimd door: ${message.author.username}`)
            .setDescription(`${message.author.username} Gaat u verder helpen\n\nGelieven niet te taggen!`)
            .setColor("#0b03fc")
            .setFooter("Bot naam", client.user.username)
            .setTimestamp();

        return message.channel.send(serverEmbed);

    

       

    } else {

        message.channel.send("Gelieve dit command te doen bij een ticket.");

    }



}


module.exports.help = {
    name: "claim"
}