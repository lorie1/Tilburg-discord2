const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Jij kan dit niet doen");

    if (message.channel.parentID == categoryID) {

        var serverEmbed = new discord.MessageEmbed()
            .setTitle(`Commands voor staff:`)
            .setDescription(`**_STAFF COMMANDS:_**\n\n\n!close: sluit een ticket\n\n!afronding: dit zeg je als je klaar bent met een ticket, dan vraagt de bot "Heeft u verder nog vragen/klachten?"\n\n!claim: zo weten andere staff leden dat deze ticket in behandeling is!\n\n!kick: om een member te kicket (Let op dit commando is nog in de maak)\n\n!sollie-lijst: dit kunt u zeggen als u een sollicitatie lijst nodig is\n\n!clear: zo kunt u meerderen berichten in een keer verweideren\n\n\n**_Let wel op: alles moet ZONDER hoofdletters anders wekr het commando niet!_**`)
            .setColor("#0b03fc")
            .setTimestamp();

        return message.channel.send(serverEmbed);

    

       

    } 



}


module.exports.help = {
    name: "commands-staff" 
    
}

module.exports.help = {
    name: "Commands-staff" 
    
}