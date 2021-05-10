import Document, { Html, Head, Main, NextScript } from 'next/document'

import { languageCode } from '@services/constants'

import { OpenGraphMeta } from '@components'

class MyDocument extends Document {
    render() {
        return (
            <Html lang={languageCode}>
                <Head>
                    <OpenGraphMeta />

                    <link rel="manifest" href="/assets/app/manifest.json" />
                    <meta name="mobile-web-app-capable" content="yes" />

                    <meta name="application-name" content="Opener Studio" />
                    <meta name="mssmarttagspreventparsing" content="true" />
                    <meta
                        name="msapplication-window"
                        content="width=1366;height=768"
                    />

                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-title" content="Opener" />
                    <link
                        rel="apple-touch-icon"
                        href="/assets/app/icon/icon@512.jpg"
                    />
                    <meta
                        name="apple-mobile-web-app-status-bar-style"
                        content="default"
                    />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="apple-touch-fullscreen" content="yes" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
