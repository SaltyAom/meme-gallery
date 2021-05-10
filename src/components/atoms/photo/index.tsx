import { useEffect, useReducer, useRef } from 'react'

import tw from '@tailwind'

import { extract } from '@services/search'

import { PhotoComponent } from './types'

export const Photo: PhotoComponent = ({ file }) => {
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

    let { detail, extension } = extract(file)
    let source = `/meme/${file}`

    return (
        <li>
            <a
                className={tw`flex flex-col no-underline`}
                href={source}
                download={`${detail}.${extension}`}
            >
                <div
                    className={tw`w-full aspect-w-1 aspect-h-1 bg-gray-50 dark:bg-gray-700`}
                    ref={image}
                >
                    <img
                        className={tw(
                            `w-full object-cover object-center ${
                                !isIntersect ? 'opacity-0' : ''
                            }`
                        )}
                        key={file}
                        src={isIntersect ? source : ''}
                        alt={file}
                    />
                </div>
            </a>
        </li>
    )
}
