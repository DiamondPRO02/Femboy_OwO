//basic loaders
const fs = require('fs'), { Client, Collection, Intents } = require('discord.js'), config = require('./config.json'), lang = require('./languages/' + config.language + '.json');
require('dotenv').config();
var token = process.env.token;
const client = new Client({ ws: {properties: {$browser: 'Discord iOS'}}, intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES], partials: ["CHANNEL"] });
client.commands = new Collection();

//command file reader
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command_files = require(`./commands/${file}`);
	client.commands.set(command_files.data.name, command_files);
}

//event handler
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {client.once(event.name, (...args) => event.execute(...args))} 
    else {client.on(event.name, (...args) => event.execute(...args))}
}

//Slash command handler
client.on('interactionCreate', async interaction => {
    if (interaction.isCommand) {
        const command = client.commands.get(interaction.commandName);
        if (!command) return;
        if (command.guildOnly && interaction.channel.type === 'DM') {return interaction.reply(lang.index.no_dm)}
        try {
            await command.execute(interaction, client, config, lang);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: lang.index.error, ephemeral:true});
        }
    }
});

//Bot token
try{
    if (config.Token == "token") client.login(token)
    else client.login(config.Token)
}catch{console.log(lang.index.token)}