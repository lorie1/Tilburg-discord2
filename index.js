const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");
const { SlowBuffer } = require("buffer");


const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Kon geen files vinden");
        return;
    }

    jsFiles.forEach((f, i) => { 

        var fileGet = require(`./commands/${f}`);
        console.log(`de file ${f} is geladen`);

        bot.commands.set(fileGet.help.name, fileGet);




    })


});

bot.on("guildMemberAdd", member => {

    var role = member.guild.roles.cache.get(`879420297571340399`);

    if(!role) return;

    member.roles.add(role);

    var channel = member.guild.channels.cache.get(`881267033109585921`);

    if(!channel) return;

    
    var serverEmbed = new discord.MessageEmbed()
    .setDescription(`${member} is in de server geschoven\n\n\nWelkom in tilburg, doe even !help in bot commands <#868160712793522179>`)
    .setColor("#0b03fc")
    .setTimestamp();

return channel.send(serverEmbed);



})















bot.on("ready", async () => {

    console.log(`${bot.user.username} is online.`);

    bot.user.setActivity(`Lorie#1093`, { type: `LISTENING` });

});


bot.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];
    
    var arguments = messageArray.slice(1);
    
    var commands = bot.commands.get(command.slice(prefix.length));

    if (commands) commands.run(bot, message, arguments);




});

bot.login(process.env.token);