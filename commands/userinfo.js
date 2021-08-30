const discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (client, message, args) => {

    var embed = new discord.MessageEmbed()
    .setColor("#00FF00")
    .setThumbnail(member.user.displayAvatarURL({size: 4096}))
    .setTitle(`${member.user.tag}`)
    .addField("ID", `${member.id}`, true)
    .addField("Bijnaam:", nickName, true)
    .addField("Status:", `${status}`, true)
    .addField("Server gejoind", `${moment(member.joinedAt).format("LL")}`)
    .addField(`Rollen [${roles}]`, `${roleNames}`);

message.channel.send(embed);

}

module.exports.help = {
    name: "userinfo",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}