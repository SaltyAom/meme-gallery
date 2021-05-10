import { useEffect } from 'react'

import { Provider } from 'jotai'

import { AppProps } from 'next/app'

import '@styles/init.sass'

const App = ({ Component, pageProps }: AppProps) => {
    useEffect(() => {
        document.addEventListener('touchstart', () => null, {
            passive: true
        })
    }, [])

    return (
        <Provider>
            <Component {...pageProps} />
        </Provider>
    )
}

export default App
