import { ChangeEvent, FunctionComponent, useRef } from 'react'

import { useAtom } from 'jotai'
import { searchAtom } from 'src/stores/search'

import Head from 'next/head'
import Link from 'next/link'

import { Search } from 'react-feather'

import tw, { combine } from '@tailwind'

import styles from './app.module.sass'

export const AppLayout: FunctionComponent = ({ children }) => {
    let [, updateSearch] = useAtom(searchAtom)
    let previousTimeout = useRef<any>(null)

    let handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        let {
            currentTarget: { value }
        } = event

        clearTimeout(previousTimeout.current)

        if (value === '') return updateSearch(value)

        previousTimeout.current = setTimeout(() => {
            updateSearch(value)
        }, 95)
    }

    return (
        <>
            <Head>
                <title>Meme Gallery</title>
            </Head>
            <nav
                className={tw`fixed z-30 w-full h-[68px] bg-transparent sm:bg-white sm:dark:bg-gray-700`}
            >
                <div
                    className={tw`flex flex-row items-center h-full px-4 py-2`}
                >
                    <Link href="/">
                        <a
                            className={tw`hidden sm:block text-gray-800 dark:text-gray-100 text-2xl font-medium no-underline m-0 pr-4 py-2`}
                            role="heading"
                            aria-level={1}
                        >
                            Meme Gallery
                        </a>
                    </Link>
                    <form
                        className={combine(
                            tw`flex flex-row flex-1 w-100 sm:w-auto items-center text-gray-800 h-full px-3 rounded`,
                            styles.search
                        )}
                    >
                        <Search
                            className={tw`text-gray-400 mr-2 min-w-[24px]`}
                        />
                        <input
                            className={tw`flex-1 w-full h-full text-gray-800 dark:text-gray-300 text-2xl font-medium border-0 bg-transparent outline-none`}
                            type="text"
                            placeholder="Search"
                            onChange={handleSearch}
                        />
                    </form>
                </div>
            </nav>
            <main className={tw`pt-[68px]`}>{children}</main>
        </>
    )
}
