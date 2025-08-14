export const requiredEnvVars = ['LOG_CHANNEL_ID', 'TOKEN']

export function validateEnvVars() {
    const missingVars = requiredEnvVars.filter(varName => !process.env[varName])

    if (missingVars.length > 0) {
        console.error(`Missing required environment variables: ${missingVars.join(', ')}`)
        process.exit(1)
    }
}
