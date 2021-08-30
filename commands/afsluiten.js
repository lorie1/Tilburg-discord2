const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "880254056524836925";

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Jij kan dit niet doen");

    if (message.channel.parentID == categoryID) {

        var serverEmbed = new discord.MessageEmbed()
            .setTitle(`Afronding ${channelName}`)
            .setDescription(`Kunnen wij ${channelName} sluiten of heeft u nog vragen/klachten?`)
            .setColor("#0b03fc")
            .setTimestamp();

        return message.channel.send(serverEmbed);

    

       

    } else {

        message.channel.send("Gelieve dit command te doen bij een ticket.");

    }



}


module.exports.help = {
    name: "afronding"
}