import { useState, useEffect } from 'react'

import { useAtom } from 'jotai'
import { searchAtom } from '@stores/search'

import { AppLayout, GalleryLayout } from '@layouts'

import { Photo } from '@components/atoms'

import { createEngine, extract, Engine } from '@services/search'
// import { ascending } from '@services/sort'
import images from '@services/images'

import tw from '@tailwind'

const Gallery = () => {
    let [engine, updateEngine] = useState<Engine | null>(null)
    let [search] = useAtom(searchAtom)

    useEffect(() => {
        let applyEngine = async () => {
            updateEngine(await createEngine(Object.keys(images).map(extract)))
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
                            <Photo
                                key={file}
                                file={images[file as keyof typeof images]}
                                name={file}
                            />
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
                {Object.keys(images).map((fileName, index) => (
                    <Photo
                        key={fileName}
                        file={images[fileName as keyof typeof images]}
                        name={fileName}
                        showPlaceholder={index <= 28}
                    />
                ))}
            </GalleryLayout>
        </AppLayout>
    )
}

export default Gallery
