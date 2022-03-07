const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const nekoslife = require('nekos.life');
const neko = new nekoslife();
module.exports = {
	data: new SlashCommandBuilder()
		.setName('nekoslife_sfw')
		.setDescription('Pictures from Nekoslife.')
        .addStringOption(option =>
            option.setName('category')
                .setDescription('The wholesome category')
                .addChoice('Tickle', 'tickle')
                .addChoice('Slap', 'slap')
                .addChoice('Poke', 'poke')
                .addChoice('Pat', 'pat')
                .addChoice('Neko', 'neko')
                .addChoice('Meow', 'meow')
                .addChoice('Lizard', 'lizard')
                .addChoice('Kiss', 'kiss')
                .addChoice('Hug', 'hug')
                .addChoice('FoxGirl', 'foxGril')
                .addChoice('Feed', 'feed')
                .addChoice('Cuddle', 'cuddle')
                .addChoice('NekoGif', 'nekoGif')
                .addChoice('Kemonomimi', 'kemonomini')
                .addChoice('Holo', 'holo')
                .addChoice('Smug', 'smug')
                .addChoice('Baka', 'baka')
                .addChoice('Woof', 'woof')
                .addChoice('Wallpaper', 'wallpaper')
                .addChoice('Goose', 'goose')
                .addChoice('Gecg', 'gecg')
                .addChoice('Avatar', 'avatar')
                .addChoice('Waifu', 'waifu')
                .setRequired(true))
        .addUserOption(option => option.setName('target').setDescription('Ping your friend if you want.')),
	async execute(interaction) {
        if (interaction.options.getString('category') === 'tickle') {lewd = await neko.sfw.tickle()}
        if (interaction.options.getString('category') === 'slap') {lewd = await neko.sfw.slap()}
        if (interaction.options.getString('category') === 'poke') {lewd = await neko.sfw.poke()}
        if (interaction.options.getString('category') === 'pat') {lewd = await neko.sfw.pat()}
        if (interaction.options.getString('category') === 'neko') {lewd = await neko.sfw.neko()}
        if (interaction.options.getString('category') === 'meow') {lewd = await neko.sfw.meow()}
        if (interaction.options.getString('category') === 'lizard') {lewd = await neko.sfw.lizard()}
        if (interaction.options.getString('category') === 'kiss') {lewd = await neko.sfw.kiss()}
        if (interaction.options.getString('category') === 'hug') {lewd = await neko.sfw.hug()}
        if (interaction.options.getString('category') === 'foxGirl') {lewd = await neko.sfw.foxGirl()}
        if (interaction.options.getString('category') === 'feed') {lewd = await neko.sfw.feed()}
        if (interaction.options.getString('category') === 'cuddle') {lewd = await neko.sfw.cuddle()}
        if (interaction.options.getString('category') === 'nekoGif') {lewd = await neko.sfw.nekoGif()}
        if (interaction.options.getString('category') === 'kemonomimi') {lewd = await neko.sfw.kemonomimi()}
        if (interaction.options.getString('category') === 'holo') {lewd = await neko.sfw.hole()}
        if (interaction.options.getString('category') === 'smug') {lewd = await neko.sfw.smug()}
        if (interaction.options.getString('category') === 'baka') {lewd = await neko.sfw.baka()}
        if (interaction.options.getString('category') === 'woof') {lewd = await neko.sfw.woof()}
        if (interaction.options.getString('category') === 'wallpaper') {lewd = await neko.sfw.wallpaper()}
        if (interaction.options.getString('category') === 'goose') {lewd = await neko.sfw.goose()}
        if (interaction.options.getString('category') === 'gecg') {lewd = await neko.sfw.gecg()}
        if (interaction.options.getString('category') === 'avatar') {lewd = await neko.sfw.avatar()}
        if (interaction.options.getString('category') === 'waifu') {lewd = await neko.sfw.waifu()}
        const embed = new MessageEmbed()
            .setColor('#00FF00')
            .setTitle("OwO, " + interaction.options.getString('category'))
            .setTimestamp()
            .setFooter({ text: 'FembOwO#3146', iconURL: 'https://cdn.discordapp.com/avatars/893200883763011594/e95fdc60fb38bb1a44e218c9d43de7e9.png?size=4096' })
            .setImage(lewd.url)
        if (interaction.options.getUser('target')) {
            const user = interaction.options.getUser('target');
            embed.setDescription(`UwU! You, ${user.toString()} have been mentioned for: ` + interaction.options.getString('category'))
            await interaction.reply({ content: user.toString(), embeds: [embed]})
        } else await interaction.reply({ embeds: [embed]})
    }
};

/*
spoiler: [AsyncFunction (anonymous)],
why: [AsyncFunction (anonymous)],
catText: [AsyncFunction (anonymous)],
OwOify: [AsyncFunction (anonymous)],
eightBall: [AsyncFunction (anonymous)],
fact: [AsyncFunction (anonymous)],
*/