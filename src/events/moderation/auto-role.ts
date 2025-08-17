import { client } from '@/shared/client'

const roleId = '1387188418462879824'

export function autoRoleEvent() {
    client.on('guildMemberAdd', async member => {
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
