const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "880254056524836925";

    if (!message.member.hasPermission("KICK_MEMBER")) return message.reply("Jij kan dit niet doen");

    if (message.channel.parentID == categoryID) {

        message.channel.send(`Ticket is geclaimd door: ${message.author.username}`);

    

        ticketChannel.send(embedCreateTicket);

    } else {

        message.channel.send("Gelieve dit command te doen bij een ticket.");

    }



}

module.exports.help = {
    name: "claim"
}