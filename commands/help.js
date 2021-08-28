const discord = require("discord.js");
const botConfig = require("../botconfig.json");

module.exports.run = async (client, message, args) => {

    // try {

    //     var text = "**YT BOT** \n\n **__Commands__** \n !hallo - Geeft een hallo terug. \n !info - Geeft info.";

    //     message.author.send(text);

    //     message.reply("Alle commands kan je vinden in je prive berichten");

    // } catch (error) {
    //     message.reply("Er is iets fout gelopen");
    // }

    var commandList = [];
    var prefix = botConfig.prefix;

    client.commands.forEach(command => {

        var constructor = {
            name: command.help.name,
            description: command.help.description,
            category: command.help.category
        }

        commandList.push(constructor);

    });

    var response = "**Bot commands Tilburg**\n\n";
    var general = "**__Algemenen Commands__**\n\n !help: U krijgt alle informatie te ziet wat alle commands doen en welke er zijn. \n\n !serverinfo u krijgt een klein onderdeel te zien van onze server zoalsoe veel leden wij hebben, hoe onze server heet en wanner u pns bent gejoint.\n\n";
    var info = "\n**__Informatie__**\n\n Deze Bot is nog in de maak, hij is al wel 24/7 online, dus hij kan al gebruikt worden!";

    for (let i = 0; i < commandList.length; i++) {
        const command = commandList[i];

        if (command["category"] == "Algemeen") {

            general += `${prefix}${command["name"]} - ${command["description"]}\n`;

        } else if(command["category"] == "Informatie"){

            info += `${prefix}${command["name"]} - ${command["description"]}\n`;

        }

    }

    response += general;
    response += info;

    message.author.send(response).then(() => {
        message.channel.send("Alle commands staan in je privé berichten! :mailbox_with_mail:");
    }).catch(() => {
        message.channel.send("Je privé berichten staan uit dus je hebt niets ontvangen.");
    });

}

module.exports.help = {
    name: "help",
    description: "Geeft al de verschillende commands",
    category: "Algemeen"
}