const discord = require("discord.js");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (client, message, args) => {

    // !warn spelerNaam redenen hier.

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("sorry jij kan dit niet");

    if (!args[0]) return message.reply("Geen gebruiker opgegeven.");

    if (!args[1]) return message.reply("Gelieve een redenen op te geven.");

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.reply("Geen perms");

    var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    var reason = args.slice(1).join(" ");

    if (!warnUser) return message.reply("Kan de gebruiker niet vinden.");

    if (warnUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry je kunt deze gebruiker niet warnen");

    if (!warns[warnUser.id]) warns[warnUser.id] = {
        warns: 0
    };

    warns[warnUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

    var embed = new discord.MessageEmbed()
        .setColor("#0b03fc")
        .setFooter(message.member.displayName, message.author.displayAvatarURL)
        .setTimestamp()
        .setDescription(`**Gewarnd:** ${warnUser} (${warnUser.id})
        **Gewarnd door:** ${message.author}
        **Redenen: ** ${reason}`)
        .addField("Aantal warns", warns[warnUser.id].warns)
        .setTimestamp();

    var channel = message.member.guild.channels.cache.get("886348504711168060");

    if (!channel) return;

    channel.send(embed);

    if (warns[warnUser.id].warns == 3) {

        var embed = new discord.MessageEmbed()
            .setColor("0b03fc")
            .setDescription("PAS OP")
            .addField("Bericht", "Je hebt nog een waarschuwing voor een ban.")
            .setTimestamp();

        message.channel.send(embed);

    } else if (warns[warnUser.id].warns == 4) {
        message.guild.member(warnUser).ban(reason);
        message.channel.send(`${warnUser} is verbannen door de bot wegens te veel warns`)
        .setTimestamp();
    }
}

module.exports.help = {
    name: "warn"
}