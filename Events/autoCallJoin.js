require('../index')
require('dotenv').config();

const Discord = require('discord.js')
const client = require('../index')

const { joinVoiceChannel } = require('@discordjs/voice');

client.on("ready", () => {
    const CANAL_VOZ = process.env.CANAL_VOZ
    let canal = client.channels.cache.get(CANAL_VOZ) // coloque o ID do canal de voz
    if (!canal) return console.log("❌ Não foi possível entrar no canal de voz.")
    if (canal.type !== Discord.ChannelType.GuildVoice) return console.log(`❌ Não foi possível entrar no canal [ ${canal.name} ].`)

    try {

        joinVoiceChannel({
            channelId: canal.id, // ID do canal de voz
            guildId: canal.guild.id, // ID do servidor
            adapterCreator: canal.guild.voiceAdapterCreator,
        })
        console.log(`✅ Entrei no canal de voz [ ${canal.name} ] com sucesso!`)

    } catch (e) {
        console.log(`❌ Não foi possível entrar no canal [ ${canal.name} ].`)
    }

});