import NextImage from 'next/image'

import tw, { combine } from '@tailwind'

import { extract } from '@services/search'

import styles from '../image.module.sass'

import type { ImageComponent } from './types'

export const Image: ImageComponent = ({ file, name, isIntersect }) => {
    let photo = extract(name)
    let { detail, character, extension } = photo

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
            <div className={styles.image}>
                {extension !== 'gif' ? (
                    <NextImage
                        className={tw(
                            `w-full h-full object-cover object-center ${
                                !isIntersect ? 'opacity-0' : ''
                            }`
                        )}
                        src={file}
                        placeholder="blur"
                        alt={name}
                    />
                ) : (
                    <img
                        src={file.src}
                        className={tw(
                            `w-full h-full object-cover object-center ${
                                !isIntersect ? 'opacity-0' : ''
                            }`
                        )}
                        alt={name}
                    />
                )}
            </div>
        </>
    )
}
