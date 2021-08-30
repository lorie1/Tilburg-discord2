const discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (client, message, args) => {

    var member = message.guild.member(message.mentions.users.first() || client.users.cache.get(args[0]));
    if(!message) member = message.member;

    var roles = member.roles.cache.size - 1;
    var roleNames = member.roles.cache.map(r => r).join(" ").replace("@everyone", "");
    if(roles == 0) roleNames = "Geen rollen";

    var status = member.presence.status;
    
    var nickName = member.nickname;
    if(nickName == null || undefined) nickName = "Geen";

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
    description: "Gebruikers info",
    category: "Informatie"
}