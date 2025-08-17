import { client } from '@/shared/client'
import { Events } from 'discord.js'

const roleId = '1387188418462879824' // "Member" role

export function autoRoleEvent() {
    client.on(Events.GuildMemberAdd, async member => {
        try {
            const role = member.guild.roles.cache.get(roleId)

            if (!role) {
                console.error(`Role with ID ${roleId} not found`)
                return
            }

            await member.roles.add(role)
            console.log(`Assigned ${role.name} role to ${member.user.tag}`)
        } catch (error) {
            console.error('Error assigning role:', error)
        }
    })
}
