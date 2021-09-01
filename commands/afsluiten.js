const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "880254056524836925";

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Jij kan dit niet doen");

    if (message.channel.parentID == categoryID) {

        var serverEmbed = new discord.MessageEmbed()
            .setTitle(`Afronding ${message.channel.name}`)
            .setDescription(`Kunnen wij ${message.channel.name} sluiten of heeft u nog vragen/klachten?`)
            .setColor("#0b03fc")
            .setFooter("Bot naam", client.user.username)
            .setTimestamp();

        return message.channel.send(serverEmbed);

    

       

    } else {

        message.channel.send("Gelieve dit commando te doen in een ticket.");

    }



}


module.exports.help = {
    name: "afronding"
}