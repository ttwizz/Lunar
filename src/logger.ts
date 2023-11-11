export default {
    log: (...message: unknown[]) => {
        console.log('[Lunar]'.magenta, ...message);
    },
    warn: (...message: unknown[]) => {
        console.warn('[Lunar]'.yellow, ...message);
    },
    error: (...message: unknown[]) => {
        console.error('[Lunar]'.red, ...message);
    },
};