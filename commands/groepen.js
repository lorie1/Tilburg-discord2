const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var serverEmbed = new discord.MessageEmbed()
            .setTitle("Groepen:")
            .setDescription("Politie: https://www.roblox.com/groups/7837879/team-politie-tilburg#!/about\n\nBrandweer: https://www.roblox.com/groups/10406937/Team-Brandweer-Tilburg#!/about\n\nAmbulance: https://www.roblox.com/groups/10407061/Team-Ambulance-Tilburg#!/about\n\nBurger: https://www.roblox.com/groups/10407250/GEMEENTEN-West-Tilburg-RP-V1#!/about")
            .setColor("#0b03fc")
            .setTimestamp();

        return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "groepen"
}