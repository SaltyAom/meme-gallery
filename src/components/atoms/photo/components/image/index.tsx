import tw, { combine } from '@tailwind'

import { Blurhash } from 'react-blurhash'

import { extract } from '@services/search'

import styles from '../image.module.sass'

import { ImageComponent } from './types'

export const Image: ImageComponent = ({ file, blurhash, isIntersect }) => {
    let photo = extract(file)
    let { detail, character } = photo
    let source = `/meme/${file}`

    return (
        <>
            <div
                className={combine(
                    tw`absolute z-20 flex flex-col justify-end items-start w-full h-full text-left p-4 opacity-0 transition-opacity`,
                    styles.overlay
                )}
            >
                <h4
                    className={tw`text-gray-300 text-sm font-medium capitalize m-0 mb-1`}
                >
                    {character}
                </h4>
                <h4
                    className={tw`text-white text-xl font-medium capitalize m-0`}
                >
                    {detail}
                </h4>
            </div>
            <img
                className={tw(
                    `z-10 w-full object-cover object-center ${
                        !isIntersect ? 'opacity-0' : ''
                    }`
                )}
                key={file}
                src={isIntersect ? source : ''}
                alt={file}
            />
            {blurhash && typeof blurhash.hash !== 'undefined' ? (
                <Blurhash
                    className={combine(
                        tw(`z-0 object-cover object-center`),
                        styles.blurhash
                    )}
                    hash={blurhash.hash}
                    width={blurhash.width}
                    height={blurhash.height}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
            ) : null}
        </>
    )
}
