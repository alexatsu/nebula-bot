export {}

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            TOKEN: string
            LOG_CHANNEL_ID: string
            // add more in the future
        }
    }
}
