export const isProduction = process.env.NODE_ENV === 'production'
export const isServer = typeof window === 'undefined'

export const isIos = () => {
    if (isServer) return false

    const userAgent = window.navigator.userAgent.toLowerCase()

    return /iphone|ipad|ipod/.test(userAgent)
}

export const isInStandaloneMode = () => {
    if (isServer) return false

    // @ts-ignore
    return 'standalone' in window.navigator && window.navigator.standalone
}
