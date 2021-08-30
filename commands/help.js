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
    var general = "**__Algemenen Commands__**\n\n!help: U krijgt alle informatie te zien en wat alle commands doen en welke er zijn.\n\n!serverinfo: u krijgt een klein onderdeel te zien van onze server zoals hoeveel leden wij hebben, hoe onze server heet en wanneer u bent gejoint.\n\n!new: maakt een nieuwe ticket aan.\n\n!sps <steen><papier><schaar>: is steen papier schaar\n\n!ping: hoeveel ping je momenteel heb\n\n!suggestie: zo kunt u makkelijk uw idee geven aan ons voor de game of voor de discord bot\n\n!bug: Als er iets mis is in de game of met de discord bot kunt u dat melden via het commando !bug\n\n!sollie: U krijgt de sollie status te zien.\n\n**_staff commands_**\n\n!close: sluit ticket\n\n!clear <aantal>: verweiderd het aantal opgegeven berichten.\n\n!Claim: hier mee kan een staff lid een ticket claimen, als die dat doet betekend het dat degenen die !claim heeft gedaan u gaat helpen!\n\n!afronding: Dit kan staff gebruiken als hij denk dat de ticket afgerond kan worden\n\n\nDe discord bot is nog in de maak, hij is al bruikbaar. Hij zit momenteel op 45% (bij de 100% is die af!)";
    

    for (let i = 0; i < commandList.length; i++) {
        const command = commandList[i];

        if (command["category"] == "Algemeen") {

            general += `${prefix}${command["name"]} - ${command["description"]}\n`;

        } else if(command["category"] == "Informatie"){

           

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