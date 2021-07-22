import { FunctionComponent, useState, useEffect } from 'react'
import { GetStaticProps } from 'next'

import { useAtom } from 'jotai'
import { searchAtom } from 'src/stores/search'

import { readdirSync } from 'fs'

import { AppLayout, GalleryLayout } from '@layouts'

import { Photo } from '@components/atoms'

import { createEngine, extract, Engine } from '@services/search'
import { ascending } from '@services/sort'

import tw from '@tailwind'

interface GalleryProps {
    files: string[]
}

const Gallery: FunctionComponent<GalleryProps> = ({ files }) => {
    let [engine, updateEngine] = useState<Engine | null>(null)
    let [search] = useAtom(searchAtom)

    useEffect(() => {
        let applyEngine = async () => {
            updateEngine(await createEngine(files.map(extract)))
        }

        applyEngine()
    }, [])

    let results = engine?.search(search) ?? null

    if (search)
        return (
            <AppLayout key="app-layout">
                {results && results.length ? (
                    <GalleryLayout>
                        {results.map(({ item: { file } }) => (
                            <Photo key={file} file={file} />
                        ))}
                    </GalleryLayout>
                ) : (
                    <section
                        className={tw`absolute top-0 left-0 flex flex-col justify-center items-center w-full h-screen px-4`}
                    >
                        <img
                            className={tw`w-full max-w-md`}
                            src="/illust/not_found.svg"
                            alt="Not Found"
                        />
                        <h3
                            className={tw`text-3xl text-gray-800 dark:text-gray-200 font-medium m-0 mt-8`}
                        >
                            Not found
                        </h3>
                    </section>
                )}
            </AppLayout>
        )

    return (
        <AppLayout key="app-layout">
            <GalleryLayout>
                {files.sort(ascending).map((file, index) => (
                    <Photo
                        key={file}
                        file={file}
                        showPlaceholder={index <= 28}
                    />
                ))}
            </GalleryLayout>
        </AppLayout>
    )
}

export const getStaticProps: GetStaticProps<GalleryProps> = async () => {
    let blacklist = ['.DS_Store']

    let files = readdirSync('./public/meme')
        .filter((file) => !blacklist.includes(file))
        .sort(ascending)

    return {
        props: {
            files
        }
    }
}

export default Gallery
