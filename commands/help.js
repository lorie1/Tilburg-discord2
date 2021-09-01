const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
            .setTitle('Informatie')
            .setDescription(`**_commands:_**\n\n!serverinfo: geeft info over de server\n\n!info: geeft uitleg over de server\n\n!suggestie: zo kunt u uw idee delen met ons, het komt dan in <#880846562908045372>\n\n!bug: als er een bug is kunt u dan zo aan ons melden dit komt dan in <#881862375995760671>\n\n!ping: hoeveel ping je dan heb\n\n!sollie: geeft de sollicitatie status aan\n\n!sps: is het spel steen papier schaar\n\n!new: maakt een nieuwe tichet aan\n\n\nDe bot is nog niet helemaal af! let wel op! dit zijn alleen de commands voor normale burgers staff kan !staff-commands gebruiken voor hun commands dit doen wij om sommige dingen niet meteen in het openbaar te stellen maar soms ook wat commands geheim kunnen houden die de normale leden niet hoeven te weten.`)
            .setColor("#0b03fc")
            .addField("Bot naam", client.user.username)
            .setTimestamp();

            message.channel.send("Alle infotmatie staat in je privé berichten! :mailbox_with_mail:") 
            return message.author.send(botEmbed);
}      


    




module.exports.help = {
    name: "info"
}