import { logChannelId } from '@/shared/config/log'
import { client } from '@/shared/client'
import { getLogColor, LogEventTypes } from '@/shared/colors'
import { Events, EmbedBuilder } from 'discord.js'

const placeholderAvatar = new URL('./assets/images/placeholder-avatar.jpg', import.meta.url).href

export function deleteMessageEvent() {
    client.on(Events.MessageDelete, message => {
        const logChannel = message.guild?.channels.cache.get(logChannelId)
        const isServer = message.guild
        const isBot = message.author?.bot

        if (!isServer || !logChannel || !logChannel.isTextBased() || isBot) return

        try {
            const embed = new EmbedBuilder()
                .setTitle('🗑️ Message Deleted')
                .setDescription(`Message from ${message.author?.toString()} was deleted`)
                .addFields(
                    { name: 'Channel', value: message.channel.toString(), inline: true },
                    { name: 'Content', value: message.content || '*No text content*' },
                )
                .setColor(getLogColor(LogEventTypes.MESSAGE_DELETE))
                .setThumbnail(message.author?.displayAvatarURL() ?? placeholderAvatar)
                .setTimestamp()

            void logChannel.send({ embeds: [embed] })

            console.log(`Message from ${message.author?.tag} was deleted`)
        } catch (error) {
            console.error('Error handling message deletion:', error)
        }
    })
}
