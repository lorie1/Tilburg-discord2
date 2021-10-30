const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry jij kan dit niet");


    return message.channel.send("**PARTNER BERICHT:**\n\n\nHey, wij zijn Tilburg stad V1 en wij zijn een RP server.\n\nWat te bieden:\n\nGoede staff leden\n\nSollicitaties gaan open voor alle eenheiden!\n\nEen eigen bot!\n\nV2 sneak peaks!\n\nKom jij ons joinen? Zie hier de link van onze discord!\n\n\nhttps://discord.gg/GufWhXbAbJ\n\nhttps://cdn.discordapp.com/attachments/867829710121730049/891045698299101255/Tilburg_Ani.gif")

}

module.exports.help = {
    name: "partner",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}




























