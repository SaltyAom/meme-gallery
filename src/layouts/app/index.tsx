import { ChangeEvent, FunctionComponent } from 'react'

import { useAtom } from 'jotai'
import { searchAtom } from 'src/stores/search'

import Head from 'next/head'
import Link from 'next/link'

import { Search } from 'react-feather'

import { tw } from '@services'

// eslint-disable-next-line arrow-body-style
export const AppLayout: FunctionComponent = ({ children }) => {
    let [, updateSearch] = useAtom(searchAtom)

    let handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        let {
            currentTarget: { value }
        } = event

        updateSearch(value)
    }

    return (
        <>
            <Head>
                <title>Meme Gallery</title>
            </Head>
            <nav
                className={tw`fixed z-50 w-full h-[68px] bg-white dark:bg-gray-700`}
            >
                <div
                    className={tw`flex flex-row items-center h-full px-4 pt-3 pb-2`}
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
                        className={tw`flex flex-row flex-1 items-center h-full px-3 bg-gray-100 dark:bg-gray-800 rounded text-gray-800`}
                    >
                        <Search className={tw`text-gray-400 mr-2`} />
                        <input
                            className={tw`flex-1 h-full text-gray-800 dark:text-gray-300 text-2xl font-medium border-0 bg-transparent outline-none`}
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
