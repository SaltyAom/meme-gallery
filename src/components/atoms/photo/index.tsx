import { useEffect, useReducer, useRef } from 'react'

import tw, { combine } from '@tailwind'

import { extract } from '@services/search'
import { isInStandaloneMode, isIos } from '@services/validation'

import { PhotoComponent } from './types'

import styles from './photo.module.sass'

export const Photo: PhotoComponent = ({ file, blurhash }) => {
    let [isIntersect, setIntersect] = useReducer(() => true, false)

    let image = useRef<HTMLImageElement>(null)

    useEffect(() => {
        if (!image.current) return

        let observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setIntersect()
                })
            },
            {
                rootMargin: '-20px',
                threshold: 0
            }
        )

        observer.observe(image.current)

        return () => {
            observer.disconnect()
        }
    }, [image.current])

    let { detail, extension, character } = extract(file)
    let source = `/meme/${file}`

    let Image = (
        <div
            className={combine(
                tw`relative w-full aspect-w-1 aspect-h-1 bg-gray-50 dark:bg-gray-700 overflow-hidden`,
                styles.wrapper
            )}
            ref={image}
        >
            <div
                className={combine(
                    tw`absolute z-20 flex flex-col justify-end w-full h-full p-4 opacity-0 transition-opacity`,
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
            <img
                src={blurhash}
                className={combine(
                    tw(`absolute w-full h-full z-0 object-cover object-center`),
                    styles.blurhash
                )}
                alt={`${file}'s blurhash`}
            />
        </div>
    )

    return (
        <li className={tw`flex flex-col no-underline`}>
            {isIos() && isInStandaloneMode() ? (
                Image
            ) : (
                <a
                    className={tw`flex flex-col no-underline`}
                    href={source}
                    download={`${detail}.${extension}`}
                >
                    {Image}
                </a>
            )}
        </li>
    )
}
