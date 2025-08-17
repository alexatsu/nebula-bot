import { deleteMessageEvent } from '@/events/messages/delete'
import { editMessageEvent } from '@/events/messages/edit'
import { autoRoleEvent } from '@/events/moderation/auto-role'
import { banUserEvent } from '@/events/moderation/ban'
import { handleInvitesEvent } from '@/events/moderation/invites'
import { kickUserEvent } from '@/events/moderation/kick'
import { roleUpdateEvent } from '@/events/moderation/roles'
import { voiceStateUpdateEvent } from '@/events/voice/state'
import { voiceStreamingEvent } from '@/events/voice/streaming'
import { client } from '@/shared/client'
import { Events } from 'discord.js'

export function registerAllEvents() {
    editMessageEvent()
    deleteMessageEvent()
    banUserEvent()
    kickUserEvent()
    roleUpdateEvent()
    voiceStateUpdateEvent()
    voiceStreamingEvent()
    handleInvitesEvent()
    autoRoleEvent()

    readyEvent()
}

const readyEvent = () => {
    client.once(Events.ClientReady, readyClient => {
        console.log(`Ready! Logged in as ${readyClient.user.tag}`)
    })
}
