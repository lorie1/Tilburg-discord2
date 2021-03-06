const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "880254056524836925";

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;

    var ticketBestaat = false;

    message.guild.channels.cache.forEach(channel => {

        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
            ticketBestaat = true;

            message.reply("u heeft al een ticket aangemaakt");

            return;
        }

    });

    if (ticketBestaat) return;

    var embed = new discord.MessageEmbed()
        .setTitle("Goedendag " + message.author.username)
        .setFooter("uw ticket wordt aangemaakt\n\n")
        .setColor("#0b03fc")
        .setTimestamp();

    message.channel.send(embed);

    message.guild.channels.create(userName.toLowerCase() + "-" + userDiscriminator, { type: 'text' }).then(
        (createdChannel) => {
            createdChannel.setParent(categoryID).then(
                (settedParent) => {

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });

                    settedParent.updateOverwrite(message.author.id, {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                    });

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === 'staff team'), {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                    });

                    var embedParent = new discord.MessageEmbed()
                        .setTitle(`Goedendag ${message.author.username}`)
                        .setDescription("Zet hier uw vraag/klacht.\n\n Het staff team zal u komen helpen, wij vragen u niet te taggen!")
                        .setFooter("Ticket")
                        .setColor("#0b03fc")
                        .setTimestamp();
                    
                        
                    
                        settedParent.send(embedParent);

                    var embedParent = new discord.MessageEmbed()
                        .setTitle(`**Hier een lijst met veel gestelde vragen:**`)
                        .setDescription("nIk wil graag een dev sollie doen, kan dat?\nJa, momenteel zijn deze open! Stuur maar 5 foto's van u bouw werken!\n\nIk zou graag partners willen worden, kan dat?\nJa zeker kan dit. Wij doet dit vanaf 25 leden! Zit u hier onder? Dan moet u een everyone tag doen, zit u onder de 10 leden? Dan kunt u heelaas geen partners worden!\n\nKan ik een wil een sollicitatie doen voor staff, kan dat?\nDat kunt u zien doormiddel van !sollie!\n\nMocht u verdere vragen hebben kunt u ze hier stellen!")
                        .setFooter("Ticket")
                        .setColor("#0b03fc")
                        .setTimestamp();
                    
                        
                    
                    settedParent.send(embedParent);


           

                }
            ).catch(err => {
                message.channel.send("Er is iets misgelopen probeer het later nog eens.");
                console.log(err)
            });
        }
    ).catch(err => {
        message.channel.send("Er is iets misgelopen");
        console.log(err)
    });
}

module.exports.help = {
    name: "new"
}