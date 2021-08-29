const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "880254056524836925";

    if (!message.member.roles.has('879420297571340399')) return message.channel.send("Jij kan dit niet doen")

    if (message.channel.parentID == categoryID) {

        var serverEmbed = new discord.MessageEmbed()
            .setTitle(`Sollicietatie lijst:`)
            .setDescription("Wat is je leeftijd?\n\nWat is uw roblox naam?\n\nWat is uw discord naam+tag?\n\nVoor welke eenheid wild u solliciteren?\n\nWat is AA?\n\nWat is FRP?\n\nWat doet u als u een hogere rank FRP ziet doen?\n\nWat is Prio 1?\n\nWat is Prio 2?\n\nWat is prio 3?\n\nWat is prio 5?\n\nWat doe je bij een BTGV?\n\nHoe geeft u een training(leg uit)?\n\nHoevaak bent u online?\n\nWat doet u als een burger FRP doet?\n\nHeeft u ervaring met het HR+ werk?\n\nHoe vaak per week bent u online?\n\nKunt u het leden aantal versterken?")
            .setColor("#kleur")


        return message.channel.send(serverEmbed);
    

        ticketChannel.send(embedCreateTicket);

    } else {

        message.channel.send("Gelieve dit command te doen bij een ticket.");

    }



}

module.exports.help = {
    name: "sollie-lijst"
}