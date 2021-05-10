import { useEffect, useState } from 'react'

import Head from 'next/head'

import { Provider } from 'jotai'

import { AppProps } from 'next/app'

import '@styles/init.sass'

const App = ({ Component, pageProps }: AppProps) => {
    let [isDarkTheme, setDarkTheme] = useState(false)

    useEffect(() => {
        document.addEventListener('touchstart', () => null, {
            passive: true
        })

        setDarkTheme(window.matchMedia('(prefers-color-scheme: dark)').matches)

        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', ({ matches }) => {
                setDarkTheme(matches)
            })
    }, [])

    return (
        <>
            <Head>
                <meta
                    name="theme-color"
                    content={isDarkTheme ? '#374151' : '#ffffff'}
                />
            </Head>
            <Provider>
                <Component {...pageProps} />
            </Provider>
        </>
    )
}

export default App
