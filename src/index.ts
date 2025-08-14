import 'dotenv/config'
import { client } from '@/shared/client'
import { registerAllEvents } from '@/events'
import { validateEnvVars } from '@/shared/config/env-check'

validateEnvVars()
registerAllEvents()

await client.login(process.env.TOKEN)
